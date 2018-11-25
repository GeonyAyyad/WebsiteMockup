import React from "react";
import Logo from '../Logo';
import ResizeImage from 'react-resize-image';
import "./Footer.css";




const style = {
  width: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  textAlign: "center",

}

const Footer = props =>
  <div>
<footer class="footer-distributed">

<div class="footer-left">

    <img width="400" height="200" src="http://blessedsacramentva.org/wp-content/uploads/2016/07/bsccvalogo-1.png" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />

    <p class="footer-links">
        <a href="#" class="link-1">Home</a>
        
        <a href="#">About Us</a>
        
        <a href="#">Getting Involved</a>
        
        <a href="#">Contact</a>
    </p>

    <p class="footer-company-name">Blessed Sacrament © 2018</p>
</div>

<div class="footer-center">

    <div>
        <i class="fa fa-map-marker"></i>
        <p><span>198 Euclid Ave.</span> Cypress Hills, Brooklyn 11208</p>
    </div>

    <div>
        <i class="fa fa-phone"></i>
        <p>+1.555.555.5555</p>
    </div>

    <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">support@company.com</a></p>
    </div>

</div>

<div class="footer-right">

    <p class="footer-company-about">
        <span>Visit our Church</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

    <div class="footer-icons">

        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>

    </div>

</div>

</footer>
</div>

export default Footer;
