import React, {Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import Museum from './components/museum';
import Exhibit from './components/exhibits';
import Floor from './components/floor';
import { Text } from '@react-three/drei'
import "./App.css";

function App() {
  return (
  <Canvas>
    <Suspense fallback={null}>
      <ambientLight intensity={0.6} />
      <Museum position={[0, 0, 0]} />
      <Floor position={[5, 0, 0.2]} />
      <Exhibit position={[3,3,0.2]} />
      <Text position={[3,1,0.2]} color="black" fontSize={1} anchorX="center" anchorY="middle">
        "Testing"
      </Text>
      <Exhibit position={[-3,3,0.2]} />
      <Exhibit position={[0,3,0.2]} />
      <OrbitControls />
    </Suspense>
  </Canvas>
  )
}


export default App;

