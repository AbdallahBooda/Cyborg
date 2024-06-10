import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);