import React from "react";
// import { useTexture } from "@react-three/drei";
// import col from "../../textures/floor/WoodFloor039_2K_Color.jpg";
// import disp from "../../textures/floor/WoodFloor039_2K_Displacement.jpg";
// import norm from "../../textures/floor/WoodFloor039_2K_Normal.jpg";
// import rough from "../../textures/floor/WoodFloor039_2K_Roughness.jpg";
// import ao from "../../textures/floor/WoodFloor039_2K_AmbientOcclusion.jpg";

function Floor(props) {
  // const [
  //   colorMap,
  //   displacementMap,
  //   normalMap,
  //   roughnessMap,
  //   aoMap,
  // ] = useTexture([col, disp, norm, rough, ao]);

  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[30,10]} />
      <meshLambertMaterial attach="material" color="yellow" />
    </mesh>
  );
}

export default Floor;
