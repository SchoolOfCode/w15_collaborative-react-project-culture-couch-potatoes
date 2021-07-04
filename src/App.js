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

function App() {
  return (
    <Canvas fov={90}>
      <Suspense fallback={null}>

        <ambientLight intensity={0.9} />

        <Museum position={[0, 0, 0]} />
        <Floor position={[0, -5, 5]} rotation={[-Math.PI/2,0,0]}/>
        <Floor position={[-10, -5, 5]} rotation={[-Math.PI/2,0,0]}/>
        <Floor position={[10, -5, 5]} rotation={[-Math.PI/2,0,0]}/>

        <Exhibit 
        position={[-14.9, 0, 5]} 
        rotation={[0,Math.PI/2,0]} 
        size={[5,5]} 
        text={"Starry Night | 123 AD"}
        image={godzilla}
        />

        <Exhibit 
        position={[-6, 1, 0.2]} 
        size={[3.5,5]} 
        text={"Mona Lisa | 300 BC"}
        image={mona}
        />

        <Exhibit 
        position={[6, 1, 0.2]}
        size={[7,5]} 
        text={"Boromir's Sorrow | 903 AD"}
        image={boromir}
        />

        <Exhibit 
        position={[14.9, 0, 5]} 
        rotation={[0,-Math.PI/2,0]}
        size={[4,4]} 
        text={"S. Ward | Unknown"}
        image={squid}
        />

        <OrbitControls />
        <Stars />

      </Suspense>
    </Canvas>
  );
}

export default App;
