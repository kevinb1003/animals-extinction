import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import Fonts from "./components/Fonts"

ReactDOM.render(
  <React.StrictMode>
    <Fonts />
    <App />
    <style global jsx>{`
      body {
        font-family: 'AvenirNextLTPro'; 
        background-color: #d1d5d5;
        margin: 0;
        color: #1e2837;
      }
      
      p {
        font-family: 'AvenirNextLTPro';
        font-size: 22px;
        font-weight: 600;
        font-stretch: condensed;
        font-style: normal;
        line-height: 1.27;
        letter-spacing: normal;
      }

      a {
        color: #1e2837;
      }
    `}</style>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
