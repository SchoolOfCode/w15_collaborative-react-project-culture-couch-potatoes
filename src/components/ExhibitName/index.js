import React from "react";
import { Text } from "@react-three/drei";

function ExhibitName(props) {
  return (
    <Text
      position={props.position}
      color="black"
      fontSize={1}
      anchorX="center"
      anchorY="middle"
    >
      {`${props.text}`}
    </Text>
  );
}

export default ExhibitName;
