import react from "react";
import reactDom from "react-dom";
import App from "./App";
import "./index.css";

reactDom.render(
    <>
    <div className="main">
        <App />
    </div>
    </>,
    document.getElementById("root")
)