import React from "react"

class PlaySound extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      play: false,
    }

    this.url =
      "https://actions.google.com/sounds/v1/ambiences/convention_hall_ambience_noise.ogg"
    this.audio = new Audio(this.url)
    this.audio.addEventListener(
      "ended",
      function () {
        this.currentTime = 0
        this.play()
      },
      false
    )
    this.togglePlay = this.togglePlay.bind(this)
  }

  togglePlay() {
    const wasPlaying = this.state.play
    this.setState({
      play: !wasPlaying,
    })

    if (wasPlaying) {
      this.audio.pause()
    } else {
      this.audio.play()
    }
  }

  render() {
    return (
      <div>
        <button id="audioBtn" onClick={this.togglePlay}>
          {" "}
          {this.state.play ? "Mute" : "Play"}
        </button>
      </div>
    )
  }
}

export default PlaySound
// ReactDOM.render(<PlaySound />, document.getElementById("root"))
