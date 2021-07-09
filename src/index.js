import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Help from "./components/help"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import PlaySound from "./components/sounds"

const root = document.querySelector("#root")

ReactDOM.render(
  <>
    <PlaySound />
    <Help />
    <App />
  </>,
  root
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
