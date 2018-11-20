import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';
import logo from './logo.svg';
import { pushRotate as Menu } from 'react-burger-menu';
import Logo from './components/Logo'
import './App.css';
import { Well, Button, Jumbotron, Col, SplitButton, MenuItem, Glyphicon, ButtonToolbar, Row, ButtonGroup, Carousel, DropdownButton, Dropdown  } from 'react-bootstrap';
import { slideInLeft, slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Image from 'react-image-resizer';
import {
AwesomeButton,
AwesomeButtonProgress,
AwesomeButtonShare,
} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import 'react-awesome-button/dist/themes/theme-blue.css';
const styles = {
slideInLeft: {
animation: 'x 1s',
animationName: Radium.keyframes(slideInLeft, 'slideInLeft'),
}
, slideInRight: {
animation: 'x 1.5s',
animationName: Radium.keyframes(slideInRight, 'slideInRight')
}
}
class App extends Component {
render() {
return (
// menu outer container
<div id="outer-container">
    
    <Menu
    left
    pageWrapId={ "page-wrap" }
    outerContainerId={ "outer-container" } >
    <img width={200} height={100} alt="900x500" src="./images/blessedsacrement.png" />
    <a id="home" className="menu-item" href="/">Home</a>
    <a id="about" className="menu-item" href="/about">About</a>
    <a id="contact" className="menu-item" href="/contact">Contact</a>
    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
    <ButtonToolbar>
    
    </ButtonToolbar>
    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
    
    </Menu>
    
    <main id="page-wrap">
        <div className="App-header">
            <Logo />
            <div className="container">
                <Row className="show-grid">
                <Col xsHidden md={4} />
                <Col xs={4} md={4}>
            <AwesomeButton type="primary">ENTER TEXT </AwesomeButton>
            </Col>
            <Col xs={4} md={4}>
            <a className="semi-transparent-button" href="https://www.pray.com/join-giving/?gclid=Cj0KCQiA_s7fBRDrARIsAGEvF8T0N0MfgWrQDW_D_GLjKW_5LujlU_015j0MUgGTVYwyUsW2FROZ2x4aAjcgEALw_wcB">Give</a>
            </Col>
            <Col xsHidden md={4} /> =
            </Row>
        </div>
    </div>
    
    {/* introduction section */}
    <div className="Introduction-section">
        
        <Carousel>
        <Carousel.Item>
        <img width={500} height={500} alt="900x500" src="./images/myface.jpg" />
        <a className="semi-transparent-button" href="/">Contact Me</a>
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img width={500} height={500} alt="900x500" src="./images/myface.jpg" />
        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img width={500} height={500} alt="900x500" src="./images/myface.jpg" />
        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>;
        <div className="container">
            <StyleRoot>
            <div className="test" style={styles.slideInLeft}>
                <br></br>
                <br>
                </br>
            </div>
            <div className="row">
                <Col xs={4} md={6}>
                
                </Col>
                <Col xs={6} md={6}>
                <div className="test" style={styles.slideInRight}>
                    <p> Hello! My name is Geony Ayyad and I am a marketing professional looking to break into the web development industry.</p>
                </div>
                </Col>
            </div>
            
            </StyleRoot>
        </div>
    </div>
    {/* church calendar section */}
    <div className="Calendar-section">
        <div className="container">
            <h1>Hello</h1>
            <div className="content center"></div>
            <h2 class="weekend-services-heading" style={styles.slideInRight} >weekend <span>Services</span></h2>
            <div class="service-item-outer">
                <div class="row">
                    
                    <div class="col-sm-4 col-md-push-2">
                        <div class="service-item gray">
                            <div class="service-item-image">
                                <img class="img-responsive" src="https://go2cornerstone.com/wp-content/uploads/2018/09/main1.jpg" />
                            </div>
                            <h2 class="service-item-heading">weekend services<br /><span>Sanctuary</span>
                            </h2>
                            <p class="service-time">Saturday 5:00<br />
                                <br />
                                Sunday 9:00 10:20 & 11:40<br />
                                <br />
                                Menifee Campus Sunday 10:30</p>                        <p>High energy music fuels worship in our largest weekend venue.</p>
                            </div>
                        </div>
                        
                        <div class="col-sm-4 col-md-push-2">
                            <div class="service-item orange">
                                <div class="service-item-image">
                                    <img class="img-responsive" src="https://go2cornerstone.com/wp-content/uploads/2018/09/classic-1.jpg" />
                                </div>
                                <h2 class="service-item-heading">weekend services<br/><span>Classic</span>
                                </h2>
                                <p class="service-time">Sundays 9:00</p>                        <p>Classic and timeless contemporary Christian music fills this venue appealing to all generations.</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* footer */}
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
            <ul id="menu-footer" className="menu">
                <li id="menu-item-48" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48">
                    <a href="https://blessedsacrament-brooklyn.org/mass-times/">Mass Times</a>
                </li>
                <li id="menu-item-51" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-51">
                    <a href="https://blessedsacrament-brooklyn.org/about-us/">About Us</a>
                </li>
                <li id="menu-item-771" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-771">
                    <a href="https://blessedsacrament-brooklyn.org/privacy-policy/">Privacy Policy</a>
                </li>
                <li id="menu-item-49" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49">
                    <a href="https://blessedsacrament-brooklyn.org/contact-us-directions/">Contact Us / Directions</a>
                </li>
                <li id="menu-item-62" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62">
                    <a href="https://blessedsacrament-brooklyn.org/sacraments/">Sacraments</a>
                </li>
                <li id="menu-item-47" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-47">
                    <a href="https://blessedsacrament-brooklyn.org/religious-education/">Religious Education</a>
                </li>
                <li id="menu-item-50" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-50">
                    <a href="https://blessedsacrament-brooklyn.org/bulletins/">Bulletins</a>
                </li>
                <li id="menu-item-46" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-46">
                    <a href="https://blessedsacrament-brooklyn.org/blessed-sacrament-school/">School</a>
                </li>
            </ul>
            
        </div>
        </StickyFooter>
    </main>
</div>
);
}
}
export default App;