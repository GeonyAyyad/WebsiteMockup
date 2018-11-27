import './App.css';
import React, { Component } from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import EventSection from './components/EventSection';
import CarouselComponent from './components/CarouselComponent';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Donate from './components/Donate';
import Navbar from './components/Navbar';
import LiveFeed from './components/LiveFeed';
import { Well, Button, Jumbotron, Col, SplitButton, MenuItem, Glyphicon, ButtonToolbar, Row, ButtonGroup, Carousel, DropdownButton, Dropdown  } from 'react-bootstrap';
import { slideInLeft, slideInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
const styles = {

}


class App extends Component {
render() {
return (
// menu outer container
<div id="outer-container">
    
    <Menu
    left
    pageWrapId={ "page-wrap" }
    outerContainerId={ "outer-container" } 
    customBurgerIcon={ <img src="./images/CCST4630-Circle-Icon.png" /> }>
    {/* <img width={200} height={100} alt="900x500" src="./images/blessedsacrement.png" /> */}
    <Donate />
    </Menu>
    
    <main id="page-wrap">
<Navbar />        
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
{/* <Donate /> */}
{/* footer */}
< Footer />
</main>
</div>
);
}
}
export default App;