import React from "react";
import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";
import col from "../../textures/wall/PaintedBricks001_4K_Color_darker_1.jpg";
import disp from "../../textures/wall/PaintedBricks001_4K_Displacement.jpg";
import norm from "../../textures/wall/PaintedBricks001_4K_Normal.jpg";
import rough from "../../textures/wall/PaintedBricks001_4K_Roughness.jpg";
import ao from "../../textures/wall/PaintedBricks001_4K_AmbientOcclusion.jpg";

function Museum({position,width,height,floorSize}) {

  const [
    colorMap,
    displacementMap,
    normalMap,
    roughnessMap,
    aoMap,
  ] = useTexture([col, disp, norm, rough, ao]);

  return (
    <>
    {/* BACK WALL */}
      <mesh position={position}>
        <planeBufferGeometry attach="geometry" args={[width+floorSize,height]} />
        <meshStandardMaterial attach="material" side={DoubleSide}
          map={colorMap}
          displacement={displacementMap}
          normalMap = {normalMap}
          roughness = {roughnessMap}
          aoMap = {aoMap}
          />
      </mesh>
    {/* LEFT WALL */}
      <mesh position={[-(width+floorSize)/2, 0, floorSize/2]} rotation={[0,Math.PI/2,0]}>
        <planeBufferGeometry attach="geometry" args={[floorSize,height]} />
        <meshStandardMaterial attach="material" side={DoubleSide}
          map={colorMap}
          displacement={displacementMap}
          normalMap = {normalMap}
          roughness = {roughnessMap}
          aoMap = {aoMap}
          />
      </mesh>
    {/* RIGHT WALL */}
      <mesh position={[(width+floorSize)/2, 0, floorSize/2]} rotation={[0,-Math.PI/2,0]}>
        <planeBufferGeometry attach="geometry" args={[floorSize,height]} />
        <meshStandardMaterial attach="material" side={DoubleSide}
          map={colorMap}
          displacement={displacementMap}
          normalMap = {normalMap}
          roughness = {roughnessMap}
          aoMap = {aoMap}
          />
        />
      </mesh>
     {/* FRONT WALL */}
     <mesh position={[position[0], position[1], floorSize]}>
        <planeBufferGeometry attach="geometry" args={[width+floorSize,height]} />
        <meshStandardMaterial attach="material" side={DoubleSide}           
          map={colorMap}
          displacement={displacementMap}
          normalMap = {normalMap}
          roughness = {roughnessMap}
          aoMap = {aoMap} 
          />
      </mesh>
      {/* ROOF */}
     <mesh position={[position[0], height/2, floorSize/2]} rotation={[-Math.PI/2,0,0]}>
        <planeBufferGeometry attach="geometry" args={[width+floorSize,floorSize]} />
        <meshStandardMaterial attach="material" side={DoubleSide} />
      </mesh>
    </>
  );
}

export default Museum;