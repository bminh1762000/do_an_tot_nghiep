/* eslint-disable react/react-in-jsx-scope */
// import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

// const container = document.getElementById("root");
// const root = createRoot(container);

const { PUBLIC_URL } = process.env;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
