import React, { useRef, useState, useMemo } from "react";
import { Text, useTexture, Html } from "@react-three/drei";
import { DoubleSide, SpotLight} from 'three'

const helperText = "Welcome to the virtual history and science museum. An interactive virtual tour that captures some of the most fascinating moments inhistory. To explore the museum use your mouse left to right. Click on exhibits of interest to find out some historic facts. We hope you enjoythe museum!."


function Exhibit(props) {

  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const imgTexture = useTexture(props.image);
  const spot = useMemo(() => new SpotLight(0xffffff), [])

  return (
    <>
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
          attach="material"
          map={imgTexture}
          side={DoubleSide}
        />
      </mesh>
      <Html 
        position = {[props.position[0]-props.size[0], 1, 1]}
        as='div'
        className="description"
        style={{
          display: "flex",
          flexDirection: "row",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.4)",
          transition: 'all 0.5s',
          opacity: active ? 1 : 0,
          pointerEvents: "none"
        }}>
          <img 
            src={props.image} 
            alt={props.text}
            style={{maxWidth: "30vw"}}
            />
          <h2>{props.text}</h2>
          <p> {props.description}</p>


        </Html>
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
// }
{/* <Html 
position = {[j, 1, 2]}
as='div'
className="description"
style={{
  color: "white",
  backgroundColor: "rgba(0,0,0,0.2)",
  transition: 'all 0.5s',
}}>
  <p> {EXHIBIT_PROPS[i][1].description} </p>
</Html> */}

// function Overlay({active, text, position}){
//   const [hidden, set] = useState(false)
    
//   return(
//         // <Html className={active? null: "hidden"} as='div' center="true" style={{color:"white", backgroundColor: "black", width:"100vw",height: "100vh"}}>
//         <Html 
//         as='div'
//         className="description"
//         position = {position}
//         occlude
//         onOcclude={set}
//         style={{
//           display: "grid",
//           color: "white",
//           backgroundColor: "rgba(0,0,0,0.2)",
//           transition: 'all 0.5s',
//           opacity: active ? 1 : 0,
//         }}>
//           <p 
//             style={{}}
//             >
//             {text}
//           </p>
//         </Html>

//   )
// }
  
export default Exhibit;
