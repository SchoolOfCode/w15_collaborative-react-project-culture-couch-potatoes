import React, {useState} from "react";
import helpImg from "../../help.png"
import exit from "../../exit.png";

function Help(){

    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [exitHovered, setExitHovered] = useState(false);

    return (
        <>
        <img 
            src={helpImg} 
            alt = "Click me for help!" 
            style={{
                position: "absolute",
                left: "1em",
                zIndex: 1000,
                float: "left",
                top: "1em",
                width: "3em",
                filter:hovered? "invert(100%) drop-shadow(2px 2px 5px gold)":"invert(100%)",
                transition: 'all 1s ease',
                transform: `rotate3d(${hovered ? "0,1,0,360deg" : "0,0,0,0deg"})`,
            }}
            onClick={(e)=>setVisible(!visible)}
            onMouseEnter={(e)=>setHovered(true)}
            onMouseLeave={(e)=> setHovered(false)}
        />
        <section           
            style={{
                padding: "10px",
                color: "white",
                fontWeight: 200,
                fontSize: "calc(1.5em + 0.1vw)",
                position: "absolute",
                top: "25%",
                left: "25%",
                zIndex: 1000,
                width: "50%", 
                backgroundColor: "rgba(0,0,0,0.8)",
                pointerEvents: "none",
                opacity: visible?1:0,
            }}>
                <br />
                <img
                style={{
                position:"absolute",
                right:"5%",
                pointerEvents: "auto",
                alignSelf: "center",
                width:"calc(2em + 0.1vw)",
                filter:exitHovered? "invert(100%) drop-shadow(2px 2px 5px gold)":"invert(100%)",
                transition: 'all 0.5s ease',
                transform: `rotate3d(${exitHovered ? "0,0,1,270deg" : "0,0,0,0deg"})`,
                }}
                src={exit}
                alt="exit button to dismiss the help instructions"
                onClick={(e) => setVisible(false)}
                onMouseEnter={(e) => setExitHovered(true)}
                onMouseLeave={(e) => setExitHovered(false)}
            />
                <u>Instructions</u>
				<p>To explore the museum:</p>
				<ol>
					<li>Use your mouse wheel or scroll to zoom in and out</li> 
					<li>Right-click and drag to move around</li>
					<li>left-click and drag to look around</li> 
					<li> Click on exhibits of interest to find out more information</li>
				</ol>
        </section>
        </>
    )
}

export default Help;