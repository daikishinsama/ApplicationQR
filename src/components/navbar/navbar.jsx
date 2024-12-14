//Barra de navegacion
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <a href="http://localhost:5173/" className="nav-logo">
            QR| <span>APP- PC Tachira</span>
          </a>

          {/* Botón de toggle para móviles */}
          <div
            className={`nav-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`nav-items ${isOpen ? "open" : ""}`}>
            <Link to="/" onClick={toggleMenu}>
              Inicio
            </Link>{" "}
            |
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>{" "}
            |
            <Link to="/login" onClick={toggleMenu}>
              Logueo
            </Link>
            |
            <Link to="/dashboard" onClick={toggleMenu}>
              Dashboard
            </Link>
            |
            <Link to="/logout" onClick={toggleMenu}>
              Logout
            </Link>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
