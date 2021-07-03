import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Museum from "./components/museum";
import Exhibit from "./components/exhibits";
import Floor from "./components/floor";
// import ExhibitName from "./components/ExhibitName";
import { Text } from "@react-three/drei";
import "./App.css";

function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <Museum position={[0, 0, 0]} />
        <Floor position={[5, 0, 0.2]} />
        <Exhibit position={[-10, 3, 0.2]} text={"Exhibit 1"}/>
        <Exhibit position={[-5, 3, 0.2]} text={"Exhibit 2"} />
        <Exhibit position={[0, 3, 0.2]} text={"Exhibit 3"}/>
        <Exhibit position={[5, 3, 0.2]} text={"Exhibit 4"}/>
        <Exhibit position={[10, 3, 0.2]} text={"Exhibit 5"}/>

        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

export default App;
