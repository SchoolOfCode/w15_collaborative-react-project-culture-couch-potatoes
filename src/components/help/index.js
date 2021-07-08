import React, {useState} from "react";
import helpImg from "../../help.png"

function Help(){

    const [visible, setVisible] = useState(false)
    const [hovered, setHovered] = useState(false)

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
                transition: 'all 0.5s',
                transform: `scale(${hovered ? 1.25 : 1})`,
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