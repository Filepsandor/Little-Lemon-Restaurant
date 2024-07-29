import React from "react";
import logo from "./logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="desktop-navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservation">Reservation</a></li>
          <li><a href="#order-online">Order online</a></li>
          <li><a href="#login">Log in</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
