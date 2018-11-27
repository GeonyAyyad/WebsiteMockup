import React from "react";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonShare,
  } from 'react-awesome-button';
  import 'react-awesome-button/dist/styles.css';
  import 'react-awesome-button/dist/themes/theme-blue.css';
  import { Well, Button, Jumbotron, Col, SplitButton, MenuItem, Glyphicon, ButtonToolbar, Row, ButtonGroup, Carousel, DropdownButton, Dropdown  } from 'react-bootstrap';
  import Logo from '../Logo';
  import "./Hero.css";



const style = {
  width: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  textAlign: "center",

}

const Hero = props =>
  <div>
  <div className="App-header">
            <Logo />
            <div className="container">
                <Row className="show-grid">
                  <br />
                  <br />
                  <br /> 
                    <AwesomeButton className="contact" type="primary" href="https://blessedsacrament-brooklyn.org/contact-us-directions/">CONTACT US </AwesomeButton>

                    <AwesomeButton type="primary" href="https://www.pray.com/join-giving/?gclid=Cj0KCQiA_s7fBRDrARIsAGEvF8T0N0MfgWrQDW_D_GLjKW_5LujlU_015j0MUgGTVYwyUsW2FROZ2x4aAjcgEALw_wcB">GIVE </AwesomeButton>
              </Row>
    </div>
</div>
  </div>;

export default Hero;
