import React, { useRef, useState } from 'react'
import { useGLTF, Html} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import model from "../../objects/wright/wright.gltf"

function Wright({position, rotation, scale, museumParams}) {
    const group = useRef()
    const { nodes, materials } = useGLTF(model)
    const rightPropeller = useRef()
    const leftPropeller = useRef()
    const engine = "#5c5a54" //grey
    const struts = "grey" //cream
    const rearStruts = "beige"
    const wings = "#f6edc6" //cream
    const prop = "grey"

    const [active, setActive] = useState(true); 
    const [hover, setHover] = useState(false)

    // useFrame((state, delta) => (rightPropeller.current.rotation.y += 0.05))
    // useFrame((state, delta) => (leftPropeller.current.rotation.y -= 0.05))
    let xBound = Math.floor(museumParams[0]/2);
    let yBound = Math.floor(museumParams[1]/2)-0.5;
    let yMod = 1;

    useFrame((state, delta) => {
        if (active){
            group.current.position.x -= 0.03
            if (group.current.position.x <= -xBound) group.current.position.x = xBound
            group.current.position.y += 0.01 * yMod
            if (group.current.position.y >= yBound) yMod *= -1
        }
    }  
    )
    return (
    <group 
        ref={group} 
        position={position} 
        rotation = {rotation} 
        scale={hover?scale+0.001:scale}
        dispose={null}
        onClick={(e)=> setActive(!active)}
        onPointerEnter={(e) => setHover(true)}
        onPointerLeave={(e) => setHover(false)}
        >
        <group >

        <Html
            position={[group.current.position.x,group.current.position.y,1]}
            style={{
                color: 'white',
                backgroundColor: "rgba(0,0,0,0.7)",
                pointerEvents: "none",
                opacity: active? 0:1,
                fontWeight: 300,
                width: "30vw",

            }}
        >
            <h3>Wright Brothers Flyer | 1903</h3>
            <p>On December 17, 1903, the Wright brothers inaugurated the aerial age with their successful first flights of a heavier-than-air flying machine at Kitty Hawk, North Carolina. </p>
        </Html>
            {/* REAR STRUTS */}
            
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0.geometry}
            material={nodes.Mesh_0.material}
        >
        <meshStandardMaterial attach="material" color={struts} />
        </mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={nodes.Mesh_1.material}
            >
            <meshStandardMaterial attach="material" color={struts}/>
            </mesh>
            
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_2.geometry}
            material={nodes.Mesh_2.material}
                    >
            <meshStandardMaterial attach="material" color={struts} />
            </mesh>
            {/* REAR STRUTS */}
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_5.geometry}
            material={nodes.Mesh_5.material}
            >
            <meshStandardMaterial attach="material" color={rearStruts} />
            </mesh>

        {/* ENGINE */}

        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_10.geometry}
            material={nodes.Mesh_10.material}
            >
            <meshStandardMaterial attach="material" color={engine} />
            </mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_11.geometry}
            material={nodes.Mesh_11.material}
            >
            <meshStandardMaterial attach="material" color={engine} />
            </mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_12.geometry}
            material={nodes.Mesh_12.material}
            >
            <meshStandardMaterial attach="material" color={engine} />
            </mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_13.geometry}
            material={nodes.Mesh_13.material}
            >
            <meshStandardMaterial attach="material" color={engine} />
            </mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_14.geometry}
            material={nodes.Mesh_14.material}
            >
            <meshStandardMaterial attach="material" color={engine} />
            </mesh>

        {/* WINGS */}

        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_3.geometry}
            material={nodes.Mesh_3.material}
            >
            <meshStandardMaterial attach="material" color={wings} />
            </mesh>

            {/* Right PROP */}
        <mesh
            ref={rightPropeller}
            castShadow
            receiveShadow
            geometry={nodes.Mesh_7.geometry}
            material={nodes.Mesh_7.material}
            >
            <meshStandardMaterial attach="material" color={prop} />
            </mesh>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_6.geometry}
            >
            <meshStandardMaterial attach="material" color={prop} />
            </mesh>
            {/* LEFT prop */}
        <mesh
            ref={leftPropeller}
            castShadow
            receiveShadow
            geometry={nodes.Mesh_8.geometry}
            material={nodes.Mesh_8.material}
            >
            <meshStandardMaterial attach="material" color={prop} />
            </mesh>

        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_9.geometry}
            material={nodes.Mesh_9.material}
            >
            <meshStandardMaterial attach="material" color={prop} />
            </mesh>
        </group>
    </group>
    )
}

useGLTF.preload(model)

export default Wright