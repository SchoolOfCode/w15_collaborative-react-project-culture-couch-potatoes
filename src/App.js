import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
 import { OrbitControls, Stars } from "@react-three/drei";
// import { PointerLockControls } from "@react-three/drei";
import Museum from "./components/museum";
import Exhibit from "./components/exhibits";
import Floor from "./components/floor";

import mona from "./objects/mona.jpg"
import boromir from "./objects/boromir.jpg"
import godzilla from "./objects/van_gough.jpg"
import squid from "./objects/squid.png"

import "./App.css";

const MUS_WIDTH = 50;
const MUS_HEIGHT = 10;
const MUS_POSITION = [0,0,0]
const FLOOR_SIZE = 10;
const TOTAL_EXHIB = 4;

function App() {
  return (
    <>
    
    <Canvas camera= {{position:[0,0,15],fov:75}}>
      <Suspense fallback={null}>

        <ambientLight intensity={0.9} />

        <Museum position={MUS_POSITION} width={MUS_WIDTH} height={MUS_HEIGHT} floorSize={FLOOR_SIZE}/>
        <Floor position={MUS_POSITION} width={MUS_WIDTH} height={MUS_HEIGHT} floorSize={FLOOR_SIZE}/>


        <Exhibit 
        position={[-MUS_WIDTH/2 + 0.1, 0, FLOOR_SIZE/2]} 
        rotation={[0,Math.PI/2,0]} 
        size={[5,5]} 
        text={"Starry Night | 123 AD"}
        image={godzilla}
        />

        <Exhibit 
        position={[-12, 1, 0.2]} 
        size={[3.5,5]} 
        text={"Mona Lisa | 300 BC"}
        image={mona}
        />

        <Exhibit 
        position={[12, 1, 0.2]}
        size={[9,5]} 
        text={"Boromir's Sorrow | 903 AD"}
        image={boromir}
        />

        <Exhibit 
        position={[MUS_WIDTH/2 - 0.1, 0, FLOOR_SIZE/2]} 
        rotation={[0,-Math.PI/2,0]}
        size={[4,4]} 
        text={"S. Ward | Unknown"}
        image={squid}
        />

        <OrbitControls />
        <Stars />

      </Suspense>
    </Canvas>
    
    </>
  );
}

export default App;
