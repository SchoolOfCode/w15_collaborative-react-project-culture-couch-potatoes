import React, { useRef, useState, useMemo } from "react"
import { Text, useTexture, Html } from "@react-three/drei"
import { DoubleSide, SpotLight } from "three"
import useSound from "use-sound"
import pencilSound from "../sounds/pencil-on-paper.mp3"
import clickSound from "../sounds/click-sound.mp3"

function Exhibit({
  position,
  size,
  text,
  image,
  altText,
  museumParams,
  description,
  link,
}) {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const imgTexture = useTexture(image)
  const spot = useMemo(() => new SpotLight(0xffffff), [])
  const landscape = size[0] > size[1]
  const [whoosh] = useSound(pencilSound)
  const [blip] = useSound(clickSound)

  function onClickEvent() {
    setActive(!active)
    whoosh()
  }

  function removeOverlay() {
    setActive(false)
    // whoosh()
  }

  function onHover() {
    setHover(true)
    blip()
  }

  return (
    <>
      {/* IMAGE ON THE WALL */}
      <mesh
        position={position}
        ref={mesh}
        scale={hovered ? 1.1 : 1}
        onClick={onClickEvent}
        onPointerOver={onHover}
        onPointerOut={(e) => setHover(false)}
      >
        <planeBufferGeometry attach="geometry" args={size} />
        <meshStandardMaterial
          attach="material"
          map={imgTexture}
          transparent
          opacity={active ? 0.3 : 1}
          metalness={0.4}
          // color={hovered ? "#ADD8E6" : "white"}
          side={DoubleSide}
        />
      </mesh>
      <primitive
        object={spot}
        position={[position[0], 5, museumParams[2] / 2]}
        intensity={0.8}
        penumbra={0.3}
        angle={0.6}
      />
      <primitive object={spot.target} position={[position[0], 0, 0]} />
      <Text
        // rotation = {rotation}
        position={[position[0], position[1] - size[1] / 1.5, position[2]]}
        color="white"
        fontSize={0.25}
        anchorX="center"
        anchorY="middle"
      >
        {`${text}`}
        <meshBasicMaterial attach="material" opacity={active ? 0 : 0.8} />
      </Text>

      {/* OVERLAY */}

      <Html
        position={[position[0] - 5, museumParams[1] / 3, 0.3]}
        as="div"
        style={{
          display: "grid",
          gap: "1em",
          color: "white",
          justifyItems: "center",
          width: landscape ? "60vw" : "40vw",
          backgroundColor: "rgba(0,0,0,0.7)",
          transition: "all 0.5s",
          transform: `scale(${active ? 1 : 0.5})`,
          opacity: active ? 1 : 0,
          pointerEvents: "none",
          padding: "1em 1em",
        }}
      >
        {/* <a href={link} target="_blank" style={{pointerEvents: "auto"}} > */}
        <img
          src={image}
          alt={altText}
          onClick={removeOverlay}
          style={{
            gridColumn: 1,
            width: landscape ? "60vw" : "25vw",
            maxHeight: landscape ? "50vh" : "45vh",
            pointerEvents: active ? "auto" : "none",
          }}
        />
        {/* </a>           */}
        <section
          style={{
            gridColumn: 1,
          }}
        >
          <h2
            style={{
              fontWeight: 300,
              textAlign: "center",
            }}
          >
            {text}
          </h2>
          <p> {description}</p>
        </section>
      </Html>
    </>
  )
}
export default Exhibit
