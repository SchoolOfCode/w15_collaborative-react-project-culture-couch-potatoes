import React, { useRef, useState } from "react";
import { Text } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { DoubleSide } from 'three'

function Exhibit(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const imgTexture = useTexture(props.image);
  return (
    <>
      <Overlay active={active}/>
      <mesh
        {...props}
        ref={mesh}
        scale={hovered ? 1.1 : 1}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        >
        <planeBufferGeometry attach="geometry" args={props.size} />
        <meshStandardMaterial
          opacity={hovered ? 1 : 0.95}
          attach="material"
          map={imgTexture}
          side={DoubleSide}
        />
      </mesh>

      <Text
        rotation = {props.rotation}
        position={[props.position[0],props.position[1]-3, props.position[2]]}
        color={"white"}
        opacity={hovered ? 1 : 0}
        fontSize={hovered ? 0.25 : 0.2}
        anchorX="center"
        anchorY="middle"
        >
        {`${props.text}`}
      </Text>
      
    </>

  );
}

function Overlay(props){

  return(
      <>
        <Text
          fontSize= {0.5}
          position={[0,0,4.1]}
          // anchorX="left"
          // anchorY="middle"
          >
          {"This is an overlay"}
          <meshBasicMaterial
            attach="material"
            side={DoubleSide}
            color={"white"}
            transparent
            opacity= {props.active?1:0}
          />
        </Text>
    
      <mesh position={[0,0,4]} >
          <planeBufferGeometry 
            attach="geometry" 
            args={[50,15]} />
          <meshStandardMaterial 
            attach="material"   
            color="black" 
            opacity= {props.active?0.6:0} 
            transparent= {true}
            side={DoubleSide}
          />
      </mesh>
    </>
  )
}
  
export default Exhibit;
