import React, {useState} from "react"
import "./index.css"

const Overlay = () => {

    const [showResults, setShowResults] = useState(true)
    return (
        <article style={showResults? {display:"block"}:{display:"none"}}>
        <h4>Welcome</h4>
            <p>
            Welcome to the virtual history and science museum. An interactive
            virtual tour that captures some of the most fascinating moments in
            history. To explore the museum use your mouse left to right. Click on
            exhibits of interest to find out some historic facts. We hope you enjoy
            the museum!.
            </p>
        <button onClick={(e) => setShowResults(!showResults)}>Exit</button>

      </article>
    )
}

export default Overlay