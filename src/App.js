import React, { Suspense} from "react";
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Loader, useProgress, Html} from "@react-three/drei";

import Museum from "./components/museum";
import Exhibit from "./components/exhibits";
import Floor from "./components/floor";

import artworks from "./artworks";

import "./App.css";

const MUS_WIDTH = 50;
const MUS_HEIGHT = 12;
const MUS_POSITION = [0,0,0]
const FLOOR_SIZE = 10;
const helperText = "Welcome to the virtual history and science museum. An interactive virtual tour that captures some of the most fascinating moments inhistory. To explore the museum use your mouse left to right. Click on exhibits of interest to find out some historic facts. We hope you enjoythe museum!."


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
    </Canvas>
    <Loader />
    </>
  );
}

export default App;
