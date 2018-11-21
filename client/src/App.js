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
    
    <Carousel>
    <Carousel.Item>
    <img width={1700} height={500} alt="900x500" src="./images/Church1.jpg" />
    <Carousel.Caption>
    <h3>BLESSED SACRAMENT</h3>
    <p>Our beautiful and historic community of Cypress Hills is blessed to have, right in the heart of the neighborhood, Blessed Sacrament Church.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img width={1700} height={500} alt="900x500" src="./images/Church2.jpg" />
    <Carousel.Caption>
    <h3>OUR HISTORY</h3>
    <p>In 2016, we celebrated our 125th year of serving God and community.  Our parish is as alive and enthusiastic about our mission as when we began!</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img width={1700} height={500} alt="900x500" src="./images/Church3.jpg" />
    <Carousel.Caption>
    <h3>JOIN US</h3>
    <p>Our doors remain wide open all day long for everyone to find strength in the spiritual life.</p>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    {/* <div className="container">
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
            </div>
            </Col>
        </div>
        
        </StyleRoot>
    </div> */}
</div>
{/* church event section */}
<div className="Event-section">
    <div className="container">
        <div class="content">
            <div class="row">
                
                <div class="col-sm-6">
                    <div class="home-event-left">
                        <h2 class="home-events-heading">
                        upcoming <span>Events</span>
                        </h2>
                        
                        <div class="home-event-outer small-church">
                            
                            <div class="event-left-item">
                                <div class="event-item-date">
                                    <span>24</span>
                                </div>
                                <div class="event-item-month">
                                    <span>Nov</span>
                                </div>
                            </div>
                            <div class="event-right-item">
                                <h2 class="evente-right-heading">English Mass</h2>
                                <p>Starts: 4:00 pm Ends: 5:00 pm
                                </p>
                            </div>
                        </div>
                        <div class="home-event-outer large-church">
                            <div class="event-left-item">
                                <div class="event-item-date">
                                    <span>24</span>
                                </div>
                                <div class="event-item-month">
                                    <span>Nov</span>
                                </div>
                            </div>
                            <div class="event-right-item">
                                <h2 class="evente-right-heading">Spanish Mass</h2>
                                <p>Starts: 7:30 pm Ends: 8:30 pm</p>
                            </div>
                        </div>
                        <div class="home-event-outer small-church">
                            <div class="event-left-item">
                                <div class="event-item-date">
                                    <span>25</span>
                                </div>
                                <div class="event-item-month">
                                    <span>Nov</span>
                                </div>
                            </div>
                            <div class="event-right-item">
                                <h2 class="evente-right-heading">English Mass</h2>
                                <p>Starts: 8:30 am Ends: 9:30 am</p>
                            </div>
                        </div>
                        <div class="home-event-outer large-church">
                            <div class="event-left-item">
                                <div class="event-item-date"><span>25</span>
                            </div>
                            <div class="event-item-month"><span>Nov</span>
                        </div>
                    </div>
                    <div class="event-right-item">
                        <h2 class="evente-right-heading">Spanish Mass</h2>
                        <p>Starts: 9:45 am Ends: 10:45 am</p>
                    </div>
                </div>
                
                <a class="btn btn-gray" href="https://blessedsacrament-brooklyn.org/calendar/">View All Events</a>
                
                <br />
                <br />
            </div>
        </div>
    </div>
</div>
</div>
</div>
{/* right side section */}
{/* church calendar section */}
<div className="Calendar-section">
<div className="container">
<h1>Hello</h1>
<div className="content center"></div>
<h2 class="weekend-services-heading" style={styles.slideInRight} >weekend service<span>HI</span></h2>
<div class="service-item-outer">
    <div class="row">
        
        <div class="col-sm-4 col-md-push-2">
            <div class="service-item gray">
                <div class="service-item-image">
                    <img class="img-responsive" src="https://images.pexels.com/photos/65922/church-altar-building-germany-65922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </div>
                <h2 class="service-item-heading">weekend services<br /><span>HI</span>
                </h2>
                <p class="service-time">
                    Saturday<br />
                    English: 8:30 a.m.<br />
                    English: 4:00 p.m.<br />
                    Spanish: 7:00 p.m.<br />
                    Confession: Saturdays 9 a.m to 10 a.m.<br />
                    <br />

                    Sunday<br />
                    English: 8:30 a.m.<br />
                    Spanish: 9:45 a.m.<br />
                    Spanish: 11:15 a.m.<br />
                    English: 12:45 p.m.

<br />
                    <br />
                    <br />
                    </p>                      
                </div>
            </div>
            
            <div class="col-sm-4 col-md-push-2">
                <div class="service-item orange">
                    <div class="service-item-image">
                        <img class="img-responsive" src="https://images.pexels.com/photos/372326/pexels-photo-372326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </div>
                    <h2 class="service-item-heading">weekday service<br/><span>HI</span>
                    </h2>
                    <p class="service-time">Monday-Friday<br />
                      English: 8:30 a.m.<br />
                      Spanish: 7:00 p.m<br />
                    </p>                        
                </div>
            </div>
        </div>
    </div>
    <br />
    <div class="service-item-outer">
        <div class="row">
            <div class="col-sm-4">
                <div class="service-item gray">
                    <div class="service-item-image">
                        <img class="img-responsive" src="https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </div>
                    <h2 class="service-item-heading">Children's Club<br /><span>Weekly Youth Meetings</span>
                    </h2>
                    <p class="service-time">Friday: Youth Group, 7:30 p.m., gym</p>
                    <p>Friday: Jornada, 7:30 p.m., church basement</p>
                </div>
            </div>
            
            <div class="col-sm-4">
                <div class="service-item orange">
                    <div class="service-item-image">
                        <img class="img-responsive" src="https://images.pexels.com/photos/1024900/pexels-photo-1024900.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
                    </div>
                    <h2 class="service-item-heading">weekly prayer group<br /><span>HI</span>
                    </h2>
                    <p class="service-time">Tuesday: Cristo La Roca,<br /> 7:30 p.m., church basement <br /><br />
                    Thursday Cursillo de Cristiandad,<br />7:30 p.m., chapel <br /><br />
                    Sunday: Spanish Legion of Mary,<br /> 10 a.m., church basement</p> 
                </div>
            </div>
            <div class="col-sm-4">
                <div class="service-item gray">
                    <div class="service-item-image">
                        <img class="img-responsive" src="https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    </div>
                    <h2 class="service-item-heading">spanish bereavement group<br /><span>HI</span>
                    </h2>
                    <p class="service-time">Last Monday each month, 7:30 p.m., chapel</p>                      
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
</main>
</div>
);
}
}
export default App;