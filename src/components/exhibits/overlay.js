import React from "react";
import { Text } from "@react-three/drei";



function Overlay(){

return(
    <>
    <Text
    fontSize= {1}
    position={[0,0,10.5]}
    color={"black"}
    anchorX="center"
    anchorY="middle"
  >
    {"This is where the cards will go"}
  </Text>
  
  <mesh position={[0,0,10.4]} >
      <planeBufferGeometry attach="geometry" args={[60,50]} />
      <meshStandardMaterial attach="material"   color="white" opacity= {0.7} transparent= {true}
      
      />
    </mesh>
</>
)


}


export default Overlay