import React from "react";
import "./Header.css";
import HeaderIcon from "./Images/header_icon.svg";

const menuItems = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "About Us", url: "/about" },
  { id: 3, label: "How It Works", url: "/how-it-works" },
  { id: 4, label: "Contact Us", url: "/contact" },
];

function Header() {
  return (
    <div className="landing_header">
      <div className="header_icon">
        <span>
          <img src={HeaderIcon} className="img" alt="Header icon" />
        </span>
        <span className="lma_header">
          <span className="lma_name">LMA</span>
          <span>Last Minute App</span>
        </span>
      </div>
      <div className="header_names">
        <div className="headers">
          {menuItems.map((item) => (
            <div key={item.id} className="menu_item">{item.label}</div>
          ))}
        </div>
        <span className="header_buttons">
          <button className="sign_in_button">Sign In</button>
          <button className="sign_up_button">Sign Up</button>
        </span>
      </div>
    </div>
  );
}

export default Header;
