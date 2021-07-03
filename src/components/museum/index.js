import React, { Fragment } from "react";


function Museum(props) {

  return (
    <Fragment>
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[30,10]} />
      <meshLambertMaterial attach="material" color= {"#002a36"} />
    </mesh>
    <mesh position={[-15, 0, 5]} rotation={[0,Math.PI/2,0]}>
      <planeBufferGeometry attach="geometry" args={[10,10]} />
      <meshLambertMaterial attach="material" color= {"#002a36"} />
    </mesh>
    <mesh position={[15, 0, 5]} rotation={[0,-Math.PI/2,0]}>
      <planeBufferGeometry attach="geometry" args={[10,10]} />
      <meshLambertMaterial attach="material" color= {"#002a36"} />
    </mesh>
    </Fragment>
  );
}

export default Museum;
