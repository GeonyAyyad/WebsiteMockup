import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';
import { pushRotate as Menu } from 'react-burger-menu';
import Logo from './components/Logo';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import EventSection from './components/EventSection';
import CarouselComponent from './components/CarouselComponent';
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
            <AwesomeButton type="primary" href="https://blessedsacrament-brooklyn.org/contact-us-directions/">CONTACT US </AwesomeButton>
            </Col>
            <Col xs={4} md={4}>
        <AwesomeButton type="primary" href="https://www.pray.com/join-giving/?gclid=Cj0KCQiA_s7fBRDrARIsAGEvF8T0N0MfgWrQDW_D_GLjKW_5LujlU_015j0MUgGTVYwyUsW2FROZ2x4aAjcgEALw_wcB">GIVE </AwesomeButton>
        
        </Col>
        <Col xsHidden md={4} />
        </Row>
    </div>
</div>
{/* introduction section */}
<div className="Introduction-section">
    <CarouselComponent />
</div>
{/* church event section */}
< EventSection />
{/* right side section */}
{/* church calendar section */}
< Calendar />
{/* footer */}
< Footer />
</main>
</div>
);
}
}
export default App;