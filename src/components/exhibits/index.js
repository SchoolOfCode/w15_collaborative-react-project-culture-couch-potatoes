import React, { useRef, useState, useMemo } from "react";
import { Text, useTexture, Html } from "@react-three/drei";
import { DoubleSide, SpotLight} from 'three'

import mona from "../../objects/mona.jpg"
import boromir from "../../objects/boromir.jpg"
import godzilla from "../../objects/van_gough.jpg"
import squid from "../../objects/squid.png"

const EXHIBITS = [mona, boromir, godzilla, squid]
const EXHIBIT_PROPS = [
  [mona,{
    id:1,  
    size:[3.5,5], 
    text:"Mona Lisa | 300 BC", 
    description:"Welcome to the virtual history and science museum."}],
  [boromir, 
    {id:2,  
      size:[8,5],   
      text:"Boromir's Warning | 903 AD", 
      description:"blah blah blah."}],
  [godzilla,
    {id:3,  
      size:[7,5],   
      text:"Starry Night | 123 AD", 
      description:"testing testing testing"}],
  [squid,   
    {id:4,  
      size:[5,5],   
      text:"S. Ward | Unknown", 
      description:"12345647369239487368673984789374892374."}]
];

const helperText = "Welcome to the virtual history and science museum. An interactive virtual tour that captures some of the most fascinating moments inhistory. To explore the museum use your mouse left to right. Click on exhibits of interest to find out some historic facts. We hope you enjoythe museum!."

const exhibitItems = []
  for (let i = 0, j = -MUS_WIDTH/2; i < EXHIBITS.length; i++, j+= Math.floor((MUS_WIDTH/(EXHIBITS.length-1)))){
    exhibitItems.push(
      <>
        <Exhibit 
            key={EXHIBIT_PROPS[i][1].id}
            position={[j, 1, 0.1]} 
            rotation={[0,0,0]} 
            size={EXHIBIT_PROPS[i][1].size} 
            text={EXHIBIT_PROPS[i][1].text}
            image={EXHIBIT_PROPS[i][0]}
            museumParams={[MUS_WIDTH,MUS_HEIGHT,FLOOR_SIZE]}
        />
        <Html 
          position = {[j, 1, 2]}
          as='div'
          className="description"
          style={{
            color: "white",
            backgroundColor: "rgba(0,0,0,0.2)",
            transition: 'all 0.5s',
          }}>
            <p> {EXHIBIT_PROPS[i][1].description} </p>
          </Html>
      </>
    );
  }



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
          opacity={hovered ? 1 : 0.95}
          attach="material"
          map={imgTexture}
          side={DoubleSide}
        />
      <Overlay active={active} text={helperText} position = {props.position}/>
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

function Overlay({active, text, position}){
  const [hidden, set] = useState(false)
    
  return(
        // <Html className={active? null: "hidden"} as='div' center="true" style={{color:"white", backgroundColor: "black", width:"100vw",height: "100vh"}}>
        <Html 
        as='div'
        className="description"
        position = {position}
        occlude
        onOcclude={set}
        style={{
          display: "grid",
          color: "white",
          backgroundColor: "rgba(0,0,0,0.2)",
          transition: 'all 0.5s',
          opacity: active ? 1 : 0,
        }}>
          <p 
            style={{}}
            >
            {text}
          </p>
        </Html>

  )
}
  
export default Exhibit;
