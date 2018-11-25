import React from "react";
import "./Navbar.css";



const style = {
  width: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  textAlign: "center",

}

const Navbar = props =>
  <div>
    <nav id="navbar" class="">
  <div class="nav-wrapper">
    <div class="logo">
      <a href="#home"><i class="fas fa-chess-knight"></i> Logo</a>
    </div>

    <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
   <li><a href="#about">About</a></li>
   <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>



<div class="menuIcon">
  <span class="icon icon-bars"></span>
  <span class="icon icon-bars overlay"></span>
</div>


<div class="overlay-menu">
  <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
</div>
  </div>;

export default Navbar;
