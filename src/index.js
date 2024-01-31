import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './antd.css';
import './bootstrap.css';
import { ContextProvider } from "./context/Context";
import {LoadScript} from "@react-google-maps/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
        <LoadScript
            googleMapsApiKey="AIzaSyB1SFF9iYAk_YrYaMGuWVxJks0y5htFseM"
            libraries={["places"]}
        >
            <App />
        </LoadScript>

    </ContextProvider>
  </React.StrictMode>
);

