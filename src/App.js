import React, {Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import Museum from './components/museum';
import Exhibit from './components/exhibits';
import "./App.css"

function App() {
  return (
  <Canvas>
    <Suspense fallback={null}>
      <ambientLight intensity={0.6} />
      <Museum position={[0, -1, 0]} />
      <Exhibit position={[2,0,0]} />
      <Exhibit position={[-2,0,0]} />
      <OrbitControls />
    </Suspense>
  </Canvas>
  )
}


export default App;

