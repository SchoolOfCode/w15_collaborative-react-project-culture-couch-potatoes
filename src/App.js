import React, { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Museum from './components/museum';
import Exhibit from './components/exhibits';

function App() {
  return (
  <Canvas style={{height: `100vh`}}>
    <ambientLight intensity={0.6} />
    <Museum position={[0, 0, 0]} />
    <Exhibit position={[1,0,0]} />
  </Canvas>
  )
}


export default App;

