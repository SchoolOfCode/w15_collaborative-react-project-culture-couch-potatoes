import React, { Fragment } from "react";
import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
// import texture from "../../textures/floor/test.png"
import col from "../../textures/floor/WoodFloor040_1K_Color.jpg";
import disp from "../../textures/floor/WoodFloor040_1K_Displacement.jpg";
import norm from "../../textures/floor/WoodFloor040_1K_Normal.jpg";
import rough from "../../textures/floor/WoodFloor040_1K_Roughness.jpg";
import ao from "../../textures/floor/WoodFloor040_1K_AmbientOcclusion.jpg";


function Floor({position,width,height,floorSize}) {
  const [
    colorMap,
    displacementMap,
    normalMap,
    roughnessMap,
    aoMap,
  ] = useTexture([col, disp, norm, rough, ao]);
  const floorItems = []

  for (let i = -width/2; i <= width/2; i+=floorSize){
    floorItems.push(
      <mesh key={`floor_${i}`} position={[i,-position[1]-(height/2),position[2]+(floorSize/2)]} rotation = {[-Math.PI/2,0,0]} >
      <planeBufferGeometry attach="geometry" args={[floorSize,floorSize]} />
      <meshStandardMaterial attach="material" 
        map={colorMap}
        displacementScale={0}
        displacementMap={displacementMap}
        normalMap = {normalMap}
        roughnessMap = {roughnessMap}
        aoMap = {aoMap}
      side={DoubleSide}
      />
    </mesh>
    )
  }
  return (
    <>
    {floorItems}
    </>
  );

}

export default Floor;
