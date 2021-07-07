import React, { Suspense, useRef } from "react";
import { Canvas, useThree} from "@react-three/fiber";
import { OrbitControls, Html} from "@react-three/drei";

import Museum from "./components/museum";
import Exhibit from "./components/exhibits";
import Floor from "./components/floor";

import "./App.css";

const MUS_WIDTH = 50;
const MUS_HEIGHT = 12;
const MUS_POSITION = [0,0,0]
const FLOOR_SIZE = 10;


function App() {

  return (
    <>
    <Canvas 
      style={{height:"100vh", width:"100vw"}}
      dpr={Math.max(window.devicePixelRatio, 2)} 
      resize={{scroll: false}}
      camera={{position:[MUS_POSITION[0],MUS_POSITION[1],FLOOR_SIZE+5], fov:95}}>
        <Suspense fallback={null}>
            <ambientLight intensity={0.6} />
            <Museum position={MUS_POSITION} width={MUS_WIDTH} height={MUS_HEIGHT} floorSize={FLOOR_SIZE}/>
            <Floor position={MUS_POSITION} width={MUS_WIDTH} height={MUS_HEIGHT} floorSize={FLOOR_SIZE}/>
            <Exhibit width={MUS_WIDTH} height={MUS_HEIGHT} depth={FLOOR_SIZE}/>
            <OrbitControls 
              minDistance={5} maxDistance={FLOOR_SIZE-1}
              minAzimuthAngle ={-Math.PI/2.1} maxAzimuthAngle={Math.PI/2.1}
              minPolarAngle={1} maxPolarAngle={Math.PI/1.5}
              keyPanSpeed={10}>
            </OrbitControls>

        </Suspense>
    </Canvas>
    </>
  );
}

export default App;
