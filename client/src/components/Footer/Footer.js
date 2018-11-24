import React from "react";
import StickyFooter from 'react-sticky-footer';


const style = {
  width: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  textAlign: "center",

}

const Footer = props =>
  <div>

<StickyFooter
bottomThreshold={50}
normalStyles={{
backgroundColor: "#999999",
padding: "2rem"
}}
stickyStyles={{
backgroundColor: "rgba(255,255,255,.8)",
padding: "2rem"
}}
>
<div className="menu-footer-container">
  <div className="table1">
    <ul id="menu-footer" className="menu">
        <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48">
            <a href="https://blessedsacrament-brooklyn.org/mass-times/">Mass Times</a>
        </li>
        <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51">
            <a href="https://blessedsacrament-brooklyn.org/about-us/">About Us</a>
        </li>
        <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-771">
            <a href="https://blessedsacrament-brooklyn.org/privacy-policy/">Privacy Policy</a>
        </li>
        <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
            <a href="https://blessedsacrament-brooklyn.org/contact-us-directions/">Contact Us / Directions</a>
        </li>
        <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62">
            <a href="https://blessedsacrament-brooklyn.org/sacraments/">Sacraments</a>
        </li>
        <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47">
            <a href="https://blessedsacrament-brooklyn.org/religious-education/">Religious Education</a>
        </li>
        <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-50">
            <a href="https://blessedsacrament-brooklyn.org/bulletins/">Bulletins</a>
        </li>
        <li id="menu-item" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46">
            <a href="https://blessedsacrament-brooklyn.org/blessed-sacrament-school/">School</a>
        </li>
    </ul>
    </div>
    
</div>
</StickyFooter>  
  </div>;

export default Footer;
