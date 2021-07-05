import React from "react";
import { DoubleSide } from "three";

function Museum({position,width,height,floorSize}) {

  return (
    <>
    {/* BACK WALL */}
      <mesh position={position}>
        <planeBufferGeometry attach="geometry" args={[width+floorSize,height]} />
        <meshLambertMaterial attach="material" color= {"#002a36"} side={DoubleSide}/>
      </mesh>
    {/* LEFT WALL */}
      <mesh position={[-(width+floorSize)/2, 0, floorSize/2]} rotation={[0,Math.PI/2,0]}>
        <planeBufferGeometry attach="geometry" args={[floorSize,height]} />
        <meshLambertMaterial attach="material" color= {"#002a36"} side={DoubleSide}/>
      </mesh>
    {/* RIGHT WALL */}
      <mesh position={[(width+floorSize)/2, 0, floorSize/2]} rotation={[0,-Math.PI/2,0]}>
        <planeBufferGeometry attach="geometry" args={[floorSize,height]} />
        <meshLambertMaterial attach="material" color= {"#002a36"} side={DoubleSide}/>
      </mesh>
     {/* FRONT WALL */}
     <mesh position={[position[0], position[1], floorSize]}>
        <planeBufferGeometry attach="geometry" args={[width+floorSize,height]} />
        <meshLambertMaterial attach="material" color= {"#002a36"} side={DoubleSide}/>
      </mesh>
      {/* ROOF */}
     <mesh position={[position[0], height/2, floorSize/2]} rotation={[-Math.PI/2,0,0]}>
        <planeBufferGeometry attach="geometry" args={[width+floorSize,floorSize]} />
        <meshLambertMaterial attach="material" color= {"#000012"} side={DoubleSide}/>
      </mesh>
    </>
  );
}

export default Museum;