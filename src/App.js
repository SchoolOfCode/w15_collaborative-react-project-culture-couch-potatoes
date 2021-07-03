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
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />

        <Museum position={[0, 0, 0]} />
        <Floor position={[0, -5, 5]} rotation={[-Math.PI/2,0,0]}/>

        <Exhibit position={[-12, 1, 0.2]} text={"Exhibit 1"}/>
        <Exhibit position={[-6, 1, 0.2]} text={"Exhibit 2"} />
        <Exhibit position={[0, 1, 0.2]} text={"Exhibit 3"}/>
        <Exhibit position={[6, 1, 0.2]} text={"Exhibit 4"}/>
        <Exhibit position={[12, 1, 0.2]} text={"Exhibit 5"}/>

        <OrbitControls />
        <Stars />

      </Suspense>
    </Canvas>
  );
}

export default App;
