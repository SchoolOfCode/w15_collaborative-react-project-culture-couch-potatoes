import React, { Fragment, Suspense, useState } from "react";
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Loader, useProgress, Html, Stars} from "@react-three/drei";


import Museum from "./components/museum";
import Exhibit from "./components/exhibits";
import Floor from "./components/floor";

// import logo from "./logo_temp.png"
import logo from "./logo1.png";
import artworks from "./artworks";

import "./App.css";

const MUS_WIDTH = 70;
const MUS_HEIGHT = 16;
const MUS_POSITION = [0,0,0]
const FLOOR_SIZE = 10;

const setupExhibitItems = () =>{
  const exhibitItems = []

  for (let i = 0, j = -MUS_WIDTH/2, l=artworks.length; i < l; i++, j+= Math.floor((MUS_WIDTH/(l-1)))){
    exhibitItems.push(
        <Exhibit 
            key={artworks[i].id}
            position={[j, 1, 0.1]} 
            size={artworks[i].size} 
            text={`${artworks[i].title} | ${artworks[i].author} | ${artworks[i].year}`}
            image={artworks[i].image}
            altText = {artworks[i].text}
            museumParams={[MUS_WIDTH,MUS_HEIGHT,FLOOR_SIZE]}
            description = {artworks[i].description}
        />
    );
  }
  return exhibitItems;
}


function CustomLoader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <span style={{ color: 'white' }}>{progress} % loaded</span>
    </Html>
  )
}

function Welcome(){
  const [visible, setVisible] = useState(true);

  return (
    <Html 
    center
    as='div'
    className="welcome"
    style = {{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "white",
      backgroundColor: "rgba(0,0,0,0.8)",
      fontWeight:"bold",
      width: "90vw",
      height: "80vh",
      opacity: visible? 1 : 0,
      pointerEvents: "None"
    }}>
      <section style={{display: "flex", flexFlow: "row", alignItems: "center"}}>
      <figure>
          <img id="logo" src={logo} alt="logo"/>
          <figcaption style={{textAlign:"left"}}>
           
          </figcaption>
        </figure>
        <h2>Welcome to museum of history and science!</h2>
        <button id= "exit" 
          style={{pointerEvents: "auto", alignSelf:"end"}} 
          onClick={(e) => setVisible(!visible)}>
          Exit
        </button>
      </section>
      <div class= "main">
      <p>
       Presenting an interactive virtual tour that captures some of the most fascinating moments in history.</p>
       <p>To explore the museum use your mouse wheel or scroll to zoom in and out, right-click and drag to move around, and left-click and drag to look around. 
        Click on exhibits of interest to find out some historic facts. We hope you enjoy the museum!. </p>
        </div>
    </Html>
  )
}


function App() {

  const items = setupExhibitItems();

  return (
    <>
    <Canvas 
      style={{height:"100vh", width:"100vw"}}
      dpr={Math.max(window.devicePixelRatio, 2)} 
      resize={{scroll: false}}
      camera={{position:[MUS_POSITION[0],MUS_POSITION[1],FLOOR_SIZE+5], fov:95}}>
        <Suspense fallback={CustomLoader}>
            <Welcome />
            <ambientLight intensity={0.6} />
            <Museum position={MUS_POSITION} width={MUS_WIDTH} height={MUS_HEIGHT} floorSize={FLOOR_SIZE}/>
            <Floor position={MUS_POSITION} width={MUS_WIDTH} height={MUS_HEIGHT} floorSize={FLOOR_SIZE}/>
            {items}
            <OrbitControls 
              minDistance={5} maxDistance={FLOOR_SIZE-1}
              minAzimuthAngle ={-Math.PI/2.1} maxAzimuthAngle={Math.PI/2.1}
              minPolarAngle={1} maxPolarAngle={Math.PI/1.5}
              keyPanSpeed={{FLOOR_SIZE}}>
            </OrbitControls>

        </Suspense>
        <Stars />
    </Canvas>
    <Loader />
    </>
  );
}

export default App;
