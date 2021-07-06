import {PerspectiveCamera } from "@react-three/drei";
import React, {useState} from "react";

const Camera = ({position, fov}) =>{

    const [cameraPos, setCameraPos] = useState([position[0],position[1],position[2]])

    return <PerspectiveCamera makeDefault position={cameraPos} fov={fov}/>
}
export default Camera