import React, { useRef, useState, useMemo } from "react";
import { Text, useTexture, Html } from "@react-three/drei";
import { DoubleSide, SpotLight} from 'three'

const helperText = "Welcome to the virtual history and science museum. An interactive virtual tour that captures some of the most fascinating moments inhistory. To explore the museum use your mouse left to right. Click on exhibits of interest to find out some historic facts. We hope you enjoythe museum!."


function Exhibit({position,size,text,image,altText,museumParams,description}) {

  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const imgTexture = useTexture(image);
  const spot = useMemo(() => new SpotLight(0xffffff), [])

  return (
    <>
      <mesh
        position={position}
        ref={mesh}
        scale={hovered ? 1.1 : 1}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}>
        <planeBufferGeometry attach="geometry" args={size} />
        <meshStandardMaterial
          attach="material"
          map={imgTexture}
          side={DoubleSide}/>
      </mesh>
      <Html 
        position = {[position[0]-size[0]%5, museumParams[1]/3, 0.3]}
        as='div'
        className="description"
        style={{
          display: "flex",
          flexDirection: "row",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          transition: 'all 0.5s',
          transform: `scale(${active ? 1 : 0.5})`,
          opacity: active ? 1 : 0,
          pointerEvents: "none"
        }}>
          <img 
            src={image} 
            alt={altText}
            style={{maxHeight: "40vh", width: "30vw"}}
            />
          <h2>{text}</h2>
          <p> {description}</p>


        </Html>
      <primitive object={spot} 
        position={[position[0],5,museumParams[2]]} 
        intensity={0.8}
        penumbra={0.3}
        angle={0.6}
        />
      <primitive object={spot.target} position={[position[0],0, 0]} />
      <Text
        // rotation = {rotation}
        position={[position[0],position[1]-3, position[2]]}
        color={"white"}
        fontSize={hovered ? 0.25 : 0.2}
        anchorX="center"
        anchorY="middle"
        >
        {`${text}`}
      </Text>
      
    </>

  );
}
export default Exhibit;
