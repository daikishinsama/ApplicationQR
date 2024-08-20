//Barra de navegacion
import React from "react";
import "./navbar.css";

const Navbar = () => {
    return(
        <div className="navbar">
            <a href="http://localhost:5173/" className="nav-logo">
                CODE<span>APP</span>
            </a>

            <div className="nav-items">
                <a href="#">Scanner</a>
                <a href="#">Create QR</a>
                <a href="#">History</a>
                <a href="#">Settings</a>
            </div>

            <div className="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Navbar