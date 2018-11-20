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
        <img width={1700} height={500} alt="900x500" src="./images/Church1.jpg" />
        <a className="semi-transparent-button" href="/">Contact Me</a>
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img width={1700} height={500} alt="900x500" src="./images/Church2.jpg" />
        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img width={1700} height={500} alt="900x500" src="./images/Church3.jpg" />
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
                    <span>15</span>
                </div>
                <div class="event-item-month">
                    <span>Nov</span>
                </div>
            </div>
            <div class="event-right-item">
                <h2 class="evente-right-heading">Mom2Mom.</h2>
                <p>Mom2Mom is our Women's group that meets on the first and third Thursday of the month. We gather at 9:30am in Small Church for brunch, crafts, inspirational speakers and fellowship. The cost is $35 for the Fall Session that runs September 20, 2018 through December 20, 2018. Childcare is available for an additional fee and requires pre-registration along with payment to reserve a spot. Contact
                    <a href="mailto:m2m@go2cornerstone.com">m2m@go2cornerstone.com</a> for more information. Register and pay
                    <a href="http://events.constantcontact.com/register/event?llr=o5y88ubab&amp;oeidk=a07efbi5ev9e577427b">here</a>.
                </p>
            </div>
        </div>
        <div class="home-event-outer large-church">
            <div class="event-left-item">
                <div class="event-item-date">
                    <span>17</span>
                </div>
                <div class="event-item-month">
                    <span>Nov</span>
                </div>
            </div>
            <div class="event-right-item">
                <h2 class="evente-right-heading">Dream Center- Adopt a Block.</h2>
                <p>Work in our local mission field, to help those less fortunate, show some kindness, build relationships and make a difference. Our partner, Dream Center, needs up to 20 people each Saturday 9am-noon, for things like trash pickup, weeding, playing with kids or visiting seniors. No skills required, the whole family is welcome. Contact Aubrey
                    <a href="mailto:aubrey@dreamcenterle.org">aubrey@dreamcenterle.org</a> or 661-332-1177 to sign up or ask questions, or just show up at the Ambassador Hotel, 164 S Main St, Lake Elsinore.</p>
                </div>
            </div>
            <div class="home-event-outer small-church">
                <div class="event-left-item">
                    <div class="event-item-date">
                        <span>18</span>
                    </div>
                    <div class="event-item-month">
                        <span>Nov</span>
                    </div>
                </div>
                <div class="event-right-item">
                    <h2 class="evente-right-heading">HOPE Fall Food Drive</h2>
                    <p>Pick up a bag and fill it with groceries, include an optional note of encouragement to bless someone's day, and drop it at the church. Our goal is to FILL the HOPE warehouse full of food, supporting our local community just needing a little extra help. Get your neighbors or co-workers involved! Let’s beat our last record of 8600 pounds! For questions contact our
                        <a href="mailto:CommunityMissions@go2cornerstone.com" target="_blank" rel="noopener">Community Missions team</a>!</p>
                    </div>
                </div>
                <div class="home-event-outer large-church">
                    <div class="event-left-item">
                        <div class="event-item-date"><span>24</span>
                    </div>
                    <div class="event-item-month"><span>Nov</span>
                </div>
            </div>
            <div class="event-right-item">
                <h2 class="evente-right-heading">Dream Center- Adopt a Block.</h2>
                <p>Work in our local mission field, to help those less fortunate, show some kindness, build relationships and make a difference. Our partner, Dream Center, needs up to 20 people each Saturday 9am-noon, for things like trash pickup, weeding, playing with kids or visiting seniors. No skills required, the whole family is welcome. Contact Aubrey
                    <a href="mailto:aubrey@dreamcenterle.org">aubrey@dreamcenterle.org</a> or 661-332-1177 to sign up or ask questions, or just show up at the Ambassador Hotel, 164 S Main St, Lake Elsinore.
                </p>
            </div>
        </div>
        
        <a class="btn btn-gray" href="/calendar/">View All Events</a>
    </div>
</div>
            </div>
          </div>
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
                <br />
                <div class="service-item-outer">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="service-item gray">
                                <div class="service-item-image">
                                    <img class="img-responsive" src="https://go2cornerstone.com/wp-content/uploads/2018/09/infants-1.jpg" />
                                </div>
                                <h2 class="service-item-heading">family ministry<br /><span>Infants-Preschool</span>
                                </h2>
                                <p class="service-time">During all weekend services.</p>
                                <p>Safe, clean and nurturing environments for our little ones.</p>
                            </div>
                        </div>
                        
                        <div class="col-sm-4">
                            <div class="service-item orange">
                                <div class="service-item-image">
                                    <img class="img-responsive" src="https://go2cornerstone.com/wp-content/uploads/2018/09/kfifth1.jpg" />
                                </div>
                                <h2 class="service-item-heading">family ministry<br /><span>K-FIFTH</span>
                                </h2>
                                <p class="service-time">During all weekend services.</p>                        <p>Elementary students have a blast discovering God’s plan for their lives in this safe and fun environment.</p>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="service-item gray">
                                <div class="service-item-image">
                                    <img class="img-responsive" src="https://go2cornerstone.com/wp-content/uploads/2018/09/highschool1.jpg" />
                                </div>
                                <h2 class="service-item-heading">family ministry<br /><span>MIDDLE - HIGH SCHOOL</span>
                                </h2>
                                <p class="service-time">HS: Sundays at 10:20 AM<br />
                                    MS: Sundays at 10:20 AM<br />
                                    <br />
                                    Youth Midweek<br />
                                    Tuesdays at 6:30PM</p>                        <p>Students build strong friendships as they learn to live for something greater than themselves.</p>
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