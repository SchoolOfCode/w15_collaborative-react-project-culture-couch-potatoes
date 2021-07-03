import React, { useRef, useState } from "react";
import { Text } from "@react-three/drei";

function Exhibit(props) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.1 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxGeometry args={[1.2, 2, 0.2]} />
      <meshStandardMaterial
        opacity={hovered ? 0.9 : 0.6}
        color={hovered ? "red" : "green"}
      />
    </mesh>
  );
}

export default Exhibit;
