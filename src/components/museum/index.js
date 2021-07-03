import React from "react";


function Museum(props) {

  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[30,10]} />
      <meshLambertMaterial attach="material" color= {"#002a36"} />
    </mesh>

  );
}

export default Museum;
