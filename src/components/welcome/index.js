import React, {useState} from "react";
import {Html} from "@react-three/drei";
import logo from "../../logo_2.png";
import exit from "../../exit.png";

function Welcome(){
    const [visible, setVisible] = useState(true);

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
        pointerEvents: "None"
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
                width:"15em", 
                filter:"invert(100%)", 
                justifySelf:"center", 
                alignSelf:"center"}}
            />
            <h2 
            style={{
                gridColumn:2, 
                textAlign:"center", 
                fontWeight:200, 
                fontSize:"3.5rem"}}
            >
            Welcome to museum of history and science!
            </h2>
            <img
                style={{
                gridColumn:3,
                pointerEvents: "auto",
                alignSelf:"center", 
                width:"5em",
                filter:"invert(100%)"}}
                src={exit}
                alt="exit button to dismiss the help"
                onClick={(e) => setVisible(!visible)}
            />
        </section>

        <section 
            style={{
            margin: "5vh 5vw",
            fontWeight: 300,
            }}
        >
            <p>
            Presenting an interactive virtual tour that captures some of the most fascinating moments in history.
            </p>
            <p>
            To explore the museum use your mouse wheel or scroll to zoom in and out, right-click and drag to move around, and left-click and drag to look around. 
            Click on exhibits of interest to find out some historic facts. We hope you enjoy the museum!. 
            </p>
        </section>
        </Html>
    )
}

export default Welcome;