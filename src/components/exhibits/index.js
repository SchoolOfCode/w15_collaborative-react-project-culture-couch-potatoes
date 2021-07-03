import React, { useRef, useState } from 'react'

function Exhibit(props) {
  const mesh = useRef()
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
      <boxGeometry args={[1.2, 2, 0.2]} />
      <meshStandardMaterial opacity={hovered ? 0.6 : 0.9} color={"red"} />
    </mesh>
  )
}


export default Exhibit;