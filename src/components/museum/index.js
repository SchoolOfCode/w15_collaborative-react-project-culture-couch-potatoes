import React, { useRef, useState } from 'react'

function Museum(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.2 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'green' : 'red'} />
    </mesh>
  )
}


export default Museum;