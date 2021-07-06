import React, { useRef, useState, useMemo } from "react";
import { Text, useTexture, Html } from "@react-three/drei";
import { DoubleSide, RGBAFormat, SpotLight} from 'three'
import "./overlay.css"

const helperText = "Welcome to the virtual history and science museum. An interactive virtual tour that captures some of the most fascinating moments inhistory. To explore the museum use your mouse left to right. Click on exhibits of interest to find out some historic facts. We hope you enjoythe museum!."

function Exhibit(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const imgTexture = useTexture(props.image);
  const spot = useMemo(() => new SpotLight(0xffffff), [])

  return (
    <>
      <Overlay active={active} text={helperText}/>
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
      <primitive object={spot} 
        position={[props.position[0],5, props.museumParams[2]]} 
        intensity={0.8}
        penumbra={0.3}
        angle={0.6}
        />
      <primitive object={spot.target} position={[props.position[0],0, 0]} />
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

function Overlay({active, text}){
  const [hidden, set] = useState()
  
  
  return(
        // <Html className={active? null: "hidden"} as='div' center="true" style={{color:"white", backgroundColor: "black", width:"100vw",height: "100vh"}}>
        <Html 
        position = {[2,0,3]}
        occlude
        onOcclude={set}
        style={{
          width: "100vw",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.2)",
          transition: 'all 0.5s',
          opacity: active ? 0 : 1,
          transform: `scale(${active ? 0.5 : 1})`
        }}>
          <p>{text}</p>
        </Html>

  )
}
  
export default Exhibit;
