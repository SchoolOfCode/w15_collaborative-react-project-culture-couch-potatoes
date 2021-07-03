import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
 import { OrbitControls, Stars } from "@react-three/drei";
// import { PointerLockControls } from "@react-three/drei";
import Museum from "./components/museum";
import Exhibit from "./components/exhibits";
import Floor from "./components/floor";

import "./App.css";

function App() {
  return (
    <Canvas background={"black"}>
      <Suspense fallback={null}>

        <ambientLight intensity={0.75} />

        <Museum position={[0, 0, 0]} />
        <Floor position={[0, -5, 5]} rotation={[-Math.PI/2,0,0]}/>
        <Floor position={[-10, -5, 5]} rotation={[-Math.PI/2,0,0]}/>
        <Floor position={[10, -5, 5]} rotation={[-Math.PI/2,0,0]}/>

        <Exhibit position={[-15, 0, 5]} rotation={[0,Math.PI/2,0]} text={"Starry Night | 123 AD"}/>
        <Exhibit position={[-9, 1, 0.2]} text={"Mona Lisa | 300 BC"} />
        <Exhibit position={[0, 1, 0.2]} text={"Moonlander | 2042 AD"}/>
        <Exhibit position={[9, 1, 0.2]} text={"Boromir's Sorrow | 903 AD"}/>
        <Exhibit position={[15, 0, 5]} rotation={[0,-Math.PI/2,0]}  text={"Green Box | Unknown"}/>

        <OrbitControls />
        <Stars />

      </Suspense>
    </Canvas>
  );
}

export default App;
