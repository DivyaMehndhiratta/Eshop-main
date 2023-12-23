import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider.js";
import { initialState, reducer } from "./reducer";

const renderChildren = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateProvider
    initialState={initialState}
    reducer={reducer}
    children={renderChildren()}
   />
);
