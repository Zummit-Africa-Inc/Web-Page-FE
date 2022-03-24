import React from "react";
import Logo from "../Images/LOGO (1).png";
import "../CSS/navbar.css";
import Button from "./ButtonComponent";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar_image" src={Logo} alt="Logo" />

      <ul className="navbar_list">
        <li className="navbar_listItem">About</li>
        <li className="navbar_listItem">Services</li>
        <li className="navbar_listItem">Contact</li>
      </ul>

      <Button variant="outlined">
        <span style={{ color: "white" }}>Request a demo</span>
      </Button>
    </nav>
  );
}

export default Navbar;
