import React, { Fragment } from "react";
import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";

import col from "../../textures/wall/Plaster003_1K_Color_darker.jpg";
import disp from "../../textures/wall/Plaster003_1K_Displacement.jpg";
import norm from "../../textures/wall/Plaster003_1K_Normal.jpg";
import rough from "../../textures/wall/Plaster003_1K_Roughness.jpg";

function Museum({position,width,height,floorSize}) {

  const [
    colorMap,
    displacementMap,
    normalMap,
    roughnessMap,
  ] = useTexture([col, disp, norm, rough]);

  const backWall = []
  const frontWall = []
    for (let i = -width/2; i <= width/2; i+=floorSize){
      backWall.push(
        <mesh key = {`wall_${i}`} position={[i,0,0]}>
        <planeBufferGeometry attach="geometry" args={[floorSize,height]} />
        <meshStandardMaterial attach="material" side={DoubleSide}
          displacementScale={0}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap = {normalMap}
          roughnessMap = {roughnessMap}
          />
      </mesh>
      )
      frontWall.push(
        <mesh key = {`wall_${i}`} position={[i,0,floorSize]}>
        <planeBufferGeometry attach="geometry" args={[floorSize,height]} />
        <meshStandardMaterial attach="material" side={DoubleSide}
          displacementScale={0}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap = {normalMap}
          roughnessMap = {roughnessMap}
          />
      </mesh>
      )
    }

  return (
    <>
    {/* BACK WALL */}
    {backWall}
    {/* LEFT WALL */}
      <mesh position={[-(width+floorSize)/2, 0, floorSize/2]} rotation={[0,Math.PI/2,0]}>
        <planeBufferGeometry attach="geometry" args={[floorSize,height]} />
        <meshStandardMaterial attach="material" side={DoubleSide}
          displacementScale={0}
          map={colorMap}
          displacementMap={displacementMap}
          normalMap = {normalMap}
          roughnessMap = {roughnessMap}
          />
      </mesh>
    {/* RIGHT WALL */}
      <mesh position={[(width+floorSize)/2, 0, floorSize/2]} rotation={[0,-Math.PI/2,0]}>
        <planeBufferGeometry attach="geometry" args={[floorSize,height]} />
        <meshStandardMaterial attach="material" side={DoubleSide}
          displacementScale={0} map={colorMap} displacementMap={displacementMap}
          normalMap = {normalMap} roughnessMap = {roughnessMap}
          />
      </mesh>
     {/* FRONT WALL */}
      {frontWall}
      {/* ROOF */}
      <mesh position={[position[0], height/2, floorSize/2]} rotation={[-Math.PI/2,0,0]}>
        <planeBufferGeometry attach="geometry" args={[width+floorSize,floorSize]} />
        <meshStandardMaterial attach="material" side={DoubleSide} transparent opacity={0.5} />
      </mesh>
    </>
  );
}

export default Museum;