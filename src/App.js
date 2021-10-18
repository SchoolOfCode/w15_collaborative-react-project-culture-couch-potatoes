import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import {
  OrbitControls,
  Loader,
  useProgress,
  Html,
  Stars,
} from "@react-three/drei"

//World building imports
import Museum from "./components/museum"
import Exhibit from "./components/exhibits"
import Floor from "./components/floor"
import Welcome from "./components/welcome/index"
import Wright from "./components/wright"

//Text data imports for exhibits
import artworks from "./artworks"
//CSS reset imports
import "./App.css"
//Const global variables
const MUS_WIDTH = 60
const MUS_HEIGHT = 12
const MUS_POSITION = [0, 0, 0]
const FLOOR_SIZE = 12

const setupExhibitItems = () => {
  const exhibitItems = []

  for (
    let i = 0, j = -(MUS_WIDTH / 2) + 8, l = artworks.length;
    i < l;
    i++, j += Math.floor(MUS_WIDTH / l)
  ) {
    exhibitItems.push(
      <Exhibit
        key={artworks[i].id}
        position={[j, 1, 0.1]}
        size={artworks[i].size}
        text={`${
          artworks[i].title +
          (artworks[i].author !== ""
            ? " | " + artworks[i].author + " | "
            : " | ") +
          artworks[i].year
        }`}
        image={artworks[i].image}
        altText={artworks[i].text}
        museumParams={[MUS_WIDTH, MUS_HEIGHT, FLOOR_SIZE]}
        description={artworks[i].description}
        link={artworks[i].url}
      />
    )
  }
  return exhibitItems
}

function CustomLoader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <span style={{ color: "white" }}>{progress} % loaded</span>
    </Html>
  )
}

function App() {
  const items = setupExhibitItems()

  return (
    <>
      
      <Canvas
        style={{ height: "100vh", width: "100vw" }}
        dpr={Math.max(window.devicePixelRatio, 2)}
        resize={{ scroll: false }}
        camera={{
          position: [MUS_POSITION[0], MUS_POSITION[1], FLOOR_SIZE + 5],
          fov: 95,
        }}
      >
        <Suspense fallback={CustomLoader}>
          <Welcome />
          <ambientLight intensity={0.6} />
          <Museum
            position={MUS_POSITION}
            width={MUS_WIDTH}
            height={MUS_HEIGHT}
            floorSize={FLOOR_SIZE}
          />
          <Floor
            position={MUS_POSITION}
            width={MUS_WIDTH}
            height={MUS_HEIGHT}
            floorSize={FLOOR_SIZE}
          />
          {items}
          <Wright
            position={[MUS_WIDTH / 2 - 2, -3, 6]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={0.05}
            museumParams={[MUS_WIDTH, MUS_HEIGHT, FLOOR_SIZE]}
          />
          <OrbitControls
            minDistance={2}
            maxDistance={FLOOR_SIZE - 3}
            minAzimuthAngle={-Math.PI / 2.1}
            maxAzimuthAngle={Math.PI / 2.1}
            minPolarAngle={1}
            maxPolarAngle={Math.PI / 1.5}
            keyPanSpeed={FLOOR_SIZE}
          ></OrbitControls>
        </Suspense>
        <Stars />
      </Canvas>
      <Loader />
    </>
  )
}

export default App
