import React, {useState, useEffect} from "react"
import ambienceAudio from "../../convention_hall_ambience_noise.ogg"
import playIcon from "../../play.png"
import pauseIcon from "../../pause.png"
import muteIcon from "../../mute.png"

function PlaySound(props){

  const [ambientAudio] = useState(new Audio(ambienceAudio));
  const [hover,setHovered] = useState(false)
  const [isPlaying, setPlaying] = useState(false);
  const togglePlaying = () => setPlaying(!isPlaying);
  useEffect(() => {
    isPlaying ? ambientAudio.play() : ambientAudio.pause();
  })
  useEffect(() => {
    ambientAudio.addEventListener('ended', () => {
      ambientAudio.currentTime = 0;
      ambientAudio.play()
    });
  })

    return (
        <img 
          src={isPlaying ? pauseIcon: playIcon } 
          onClick={togglePlaying}
          onMouseEnter={(e) => setHovered(true)}
          onMouseLeave={(e) => setHovered(false)}
          alt="click to play ambient sound effects"
          style={{
            position: "absolute",
            left: "1em",
            zIndex: 1000,
            float: "left",
            top: "4.5em",
            opacity: 0.9,
            transition: "all 0.5s",
            transform: `scale(${hover ? 1.1 : 1})`,
            width: "3em",}}
          />
    )
}
// class PlaySound extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       play: false,
//     }

//     this.url =
//       "https://actions.google.com/sounds/v1/ambiences/convention_hall_ambience_noise.ogg"
//     this.audio = new Audio(this.url)
//     this.audio.addEventListener(
//       "ended",
//       function () {
//         this.currentTime = 0
//         this.play()
//       },
//       false
//     )
//     this.togglePlay = this.togglePlay.bind(this)
//   }

//   togglePlay() {
//     const wasPlaying = this.state.play
//     this.setState({
//       play: !wasPlaying,
//     })

//     if (wasPlaying) {
//       this.audio.pause()
//     } else {
//       this.audio.play()
//     }
//   }

//   render() {
//     return (
//         <img 
//           src={playIcon} 
//           onClick={this.togglePlay} 
//           alt="click me to play sound effects"
//           style={{
//             position: "absolute",
//             left: "1em",
//             zIndex: 1000,
//             float: "left",
//             top: "5em",
//             width: "3em",}}
//           />
//     )
//   }
// }

export default PlaySound;
