import './App.css';
import React, { Component } from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import EventSection from './components/EventSection';
import CarouselComponent from './components/CarouselComponent';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import LiveFeed from './components/LiveFeed';
import { Well, Button, Jumbotron, Col, SplitButton, MenuItem, Glyphicon, ButtonToolbar, Row, ButtonGroup, Carousel, DropdownButton, Dropdown  } from 'react-bootstrap';
import { slideInLeft, slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
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
        
<Hero />
{/* introduction section */}
<div className="Introduction-section">
    <CarouselComponent />
</div>


{/* church event section */}
<div className="Event-section">
    <div className="container">
        <div class="content">
            <div class="row">
                <div class="col-sm-6">
                < EventSection />
                </div>
            
              <div class="col-sm-6">
                < Blog />
              </div>
            </div>
        </div>
    </div>
</div>


{/* right side section */}


{/* church calendar section */}
< Calendar />
<LiveFeed />
{/* footer */}
< Footer />
</main>
</div>
);
}
}
export default App;