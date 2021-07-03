import React from "react";
// import { useTexture } from "@react-three/drei"
// import col from '../../textures/wall/PaintedBricks001_4K_Color.jpg'
// import disp from '../../textures/wall/PaintedBricks001_4K_Displacement.jpg'
// import norm from '../../textures/wall/PaintedBricks001_4K_Normal.jpg'
// import rough from '../../textures/wall/PaintedBricks001_4K_Roughness.jpg'
// import ao from '../../textures/wall/PaintedBricks001_4K_AmbientOcclusion.jpg'

// import { useLoader } from '@react-three/fiber'
// import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Museum() {
  // const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useTexture([
  //   col, disp, norm, rough, ao])

  return (
    <mesh>
      <boxGeometry args={[30, 10, 0.1]} />
      <meshStandardMaterial
      // displacementScale={0}
      // map={colorMap}
      // displacementMap={displacementMap}
      // normalMap={normalMap}
      // roughnessMap={roughnessMap}
      // aoMap={aoMap}
      />
    </mesh>
  );
}

export default Museum;
