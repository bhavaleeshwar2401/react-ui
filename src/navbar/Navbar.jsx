import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">Untitled</span>
        <a href="/">Products</a>
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
      </div>
      <div className="nav-right">
        <button className="sign-in">Sign in</button>
        <button className="demo-btn">Book a demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
