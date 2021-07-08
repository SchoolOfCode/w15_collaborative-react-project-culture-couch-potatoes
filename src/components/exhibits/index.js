import React, { useRef, useState, useMemo } from "react";
import { Text, useTexture, Html } from "@react-three/drei";
import { DoubleSide, SpotLight} from 'three'


function Exhibit({position,size,text,image,altText,museumParams,description}) {

  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const imgTexture = useTexture(image);
  const spot = useMemo(() => new SpotLight(0xffffff), [])

  return (
    <>
      {/* IMAGE ON THE WALL */}
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
          transparent
          opacity={active ? 0.3 : 1}
          // color={hovered ? "#ADD8E6" : "white"}
          side={DoubleSide}/>
      </mesh>
      <primitive object={spot} 
        position={[position[0],5,museumParams[2]]} 
        intensity={0.8}
        penumbra={0.3}
        angle={0.6}
        />
      <primitive object={spot.target} position={[position[0],0, 0]} />
      <Text
        // rotation = {rotation}
        position={[position[0],position[1]-size[1]/1.5, position[2]]}
        color="white"
        fontSize={0.25}
        anchorX="center"
        anchorY="middle"
        >
        {`${text}`}
        <meshBasicMaterial attach="material" opacity = {active ? 0 : 0.8}/>
      </Text>

      {/* OVERLAY */}

      <Html 
        position = {[position[0]-5, museumParams[1]/3, 0.3]}
        as='div'
        className="description"
        style={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.7)",
          transition: 'all 0.5s',
          transform: `scale(${active ? 1 : 0.5})`,
          opacity: active ? 1 : 0,
          pointerEvents: "none"
        }}>
          <img 
            src={image} 
            alt={altText}
            style={{maxHeight: "50vh", width: "50vw"}}
            />
          <h2>{text}</h2>
          <p> {description}</p>
        </Html>
      
    </>

  );
}
export default Exhibit;
