import React from 'react'
import { useTexture } from "@react-three/drei"
import col from '../../textures/floor/WoodFloor043_4K_Color.jpg'
import disp from '../../textures/floor/WoodFloor043_4K_Displacement.jpg'
import norm from '../../textures/floor/WoodFloor043_4K_Normal.jpg'
import rough from '../../textures/floor/WoodFloor043_4K_Roughness.jpg'
import ao from '../../textures/floor/WoodFloor043_4K_AmbientOcclusion.jpg'


function Floor() {

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useTexture([
    col, disp, norm, rough, ao])

  return (
    <mesh >
      <boxGeometry args={[10, 0.1, 10]}/>
      <meshStandardMaterial 
        displacementScale={0}
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  )
}

export default Floor;