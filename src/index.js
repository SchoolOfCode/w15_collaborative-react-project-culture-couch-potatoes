import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Overlay from "./components/overlay"

const root = document.querySelector("#root")
const overlayElem = document.querySelector("#overlay")

ReactDOM.render(
  <Overlay />,
  overlayElem
)

ReactDOM.render(
  <App />,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
