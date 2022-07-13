import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

import "bootstrap/dist/css/bootstrap.min.css"

import * as serviceWorker from "./serviceWorker"

import { 
  FontStyles,
  GlobalStyles
} from "./styled"

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();