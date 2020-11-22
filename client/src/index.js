import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import "./index.css";

import Reducer from "./_reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import GlobalStyles from "Styles/GlobalStyles";

// import * as tmImage from "@teachablemachine/image";
// window.tmImage = tmImage;

// import * as katex from "katex";
// window.katex = katex;
// console.log(window.katex);

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
