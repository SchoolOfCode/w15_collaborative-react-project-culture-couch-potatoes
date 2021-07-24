import React, { useReducer } from "react";
import { Html } from "@react-three/drei";
import logo from "../../logo_2.png";
import exit from "../../exit.png";
import useSound from "use-sound";
import boop from "../sounds/boop.mp3";

const SET_HOVERED = "hover";
const SET_NOT_HOVERED = "not hovered";
const SET_VISIBLE = "visible";

const initialState = {
  visible: true,
  hovered: false,
};

function reducer(state, action) {
  // console.log ("I am the reducer.  Mess with me at your peril");
  switch (action.type) {
    case SET_HOVERED:
      // if (state.hovered === true) {
        console.log("hovered state should be false ", state.hovered)
        return { ...state, hovered: true };
      // } 
      // else {
      //   return { hovered: false };
      // }
    // return state.hovered === true ? state.hovered=false : state.hovered=true;
case SET_NOT_HOVERED:
  console.log("hovered state should be true ", state.hovered)
  return { ...state, hovered:false };

    case SET_VISIBLE:
      console.log ("now you see me")
      // if (state.visible === true) {
      return {...state, visible: false };
    // }
    // else {
      // return {visible:true}
    // }
    default:
      return state;
  }
}

function Welcome() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [visible, setVisible] = useState(true)
  // const [hovered, setHovered] = useState(false)

  const [play] = useSound(boop);

  // function onClickEvent() {
  //   dispatch({ type: SET_VISIBLE });
  //   // setVisible(!initialState.visible)
  //   play();
  // }

  return (
    <Html
      center
      as="div"
      className="welcome"
      style={{
        color: "white",
        backgroundColor: "rgba(0,0,0,0.9)",
        fontWeight: "bold",
        width: "100vw",
        height: "100vh",
        opacity: state.visible ? 1 : 0,
        pointerEvents: "none",
      }}
    >
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "",
          margin: "5vh 5vw",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            gridColumn: 1,
            width: "calc(14em + 0.1vw)",
            filter: "invert(100%)",
            justifySelf: "center",
            alignSelf: "center",
          }}
        />
        <h2
          style={{
            gridColumn: 2,
            textAlign: "center",
            fontWeight: 200,
            fontSize: "calc(3em + 0.1vw)",
          }}
        >
          Welcome to the Virtual Museum <br />
          of History and Science!
        </h2>
        <img
          data-testid = "exit-button"
          style={{
            position: "absolute",
            top: "2vh",
            right: "2vw",
            pointerEvents: "auto",
            alignSelf: "center",
            width: "calc(3em + 0.1vw)",
            filter: state.hovered
              ? "invert(100%) drop-shadow(2px 2px 5px gold)"
              : "invert(100%)",
            transition: "all 0.5s ease",
            transform: `rotate3d(${
              state.hovered ? "0,0,1,270deg" : "0,0,0,0deg"
            })`,
          }}
          src={exit}
          alt="exit button to dismiss the help"
          // onClick={onClickEvent}
          onClick={()=> {dispatch({type: SET_VISIBLE}); play()}}
          onMouseEnter={(e) => dispatch({ type: SET_HOVERED })}
          onMouseLeave={(e) => dispatch({ type: SET_NOT_HOVERED })}
          // onMouseLeave={(e) => setHovered(false)}
        />
      </section>

      <section
        style={{
          margin: "5vh 5vw",
          fontWeight: 300,
          fontSize: "calc(1em + 1vw)",
        }}
      >
        <p>
          This is an interactive virtual tour that captures some fascinating
          moments in the history and future of science.
        </p>
        <p>
          To explore the museum use your mouse wheel or scroll to zoom in and
          out, right-click and drag to move around, and left-click and drag to
          look around. Click on exhibits of interest to find out more
          information. We hope you enjoy the museum!.
        </p>
      </section>
    </Html>
  );
}

export default Welcome;
