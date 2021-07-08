import React, {useState} from "react";
import {Html} from "@react-three/drei";
import logo from "../../logo_2.png";
import exit from "../../exit.png";

function Welcome(){
    const [visible, setVisible] = useState(true);
    const [hovered,setHovered] = useState(false);

    return (
        <Html 
        center
        as='div'
        className="welcome"
        style = {{
        color: "white",
        backgroundColor: "rgba(0,0,0,0.9)",
        fontWeight:"bold",
        width: "100vw",
        height: "100vh",
        opacity: visible? 1 : 0,
        pointerEvents: "none",
        }}>
        <section 
            style={{
            display: "grid", 
            gridTemplateColumns:"", 
            margin: "5vh 5vw",}}>
            <img 
            src={logo} 
            alt="logo" 
            style={{
                gridColumn:1, 
                width:"calc(14em + 0.1vw)", 
                filter:"invert(100%)", 
                justifySelf:"center", 
                alignSelf:"center"}}
            />
            <h2 
            style={{
                gridColumn:2, 
                textAlign:"center", 
                fontWeight:200, 
                fontSize:"calc(3em + 0.1vw)"}}
            >
            Welcome to the Virtual Museum <br/>of History and Science!
            </h2>
            <img
                style={{
                position: "absolute",
                top: "2vh",
                right: "2vw",
                pointerEvents: "auto",
                alignSelf: "center",
                width:"calc(3em + 0.1vw)",
                filter:hovered? "invert(100%) drop-shadow(2px 2px 5px gold)":"invert(100%)",
                transition: 'all 0.5s ease',
                transform: `rotate3d(${hovered ? "0,0,1,270deg" : "0,0,0,0deg"})`,
                }}
                src={exit}
                alt="exit button to dismiss the help"
                onClick={(e) => setVisible(!visible)}
                onMouseEnter={(e) => setHovered(true)}
                onMouseLeave={(e) => setHovered(false)}
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
            This is an interactive virtual tour that captures some fascinating moments in the history and future of science.
            </p>
            <p>
            To explore the museum use your mouse wheel or scroll to zoom in and out, right-click and drag to move around, and left-click and drag to look around. 
            Click on exhibits of interest to find out more information. We hope you enjoy the museum!. 
            </p>
        </section>
    </Html>
    )
}

export default Welcome;