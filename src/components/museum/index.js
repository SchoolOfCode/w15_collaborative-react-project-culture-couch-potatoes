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
          aoMap = {aoMap}
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
          aoMap = {aoMap}
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
          aoMap = {aoMap}
          />
      </mesh>
    {/* RIGHT WALL */}
      <mesh position={[(width+floorSize)/2, 0, floorSize/2]} rotation={[0,-Math.PI/2,0]}>
        <planeBufferGeometry attach="geometry" args={[floorSize,height]} />
        <meshStandardMaterial attach="material" side={DoubleSide}
          displacementScale={0} map={colorMap} displacementMap={displacementMap}
          normalMap = {normalMap} roughnessMap = {roughnessMap} aoMap = {aoMap}
          />
      </mesh>
     {/* FRONT WALL */}
      {frontWall}
      {/* ROOF */}
      <mesh position={[position[0], height/2, floorSize/2]} rotation={[-Math.PI/2,0,0]}>
        <planeBufferGeometry attach="geometry" args={[width+floorSize,floorSize]} />
        <meshStandardMaterial attach="material" side={DoubleSide} />
      </mesh>
    </>
  );
}

export default Museum;