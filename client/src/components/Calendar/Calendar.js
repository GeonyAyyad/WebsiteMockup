import React from "react";
import "./Calendar.css";
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonShare,
    } from 'react-awesome-button';
    import 'react-awesome-button/dist/styles.css';
    import 'react-awesome-button/dist/themes/theme-blue.css';


const style = {
  width: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  textAlign: "center",

}

const Calendar = props =>
  <div>
<div className="Calendar-section">
<div className="container">
<div className="content center"></div>
<h2 class="weekend-services-heading"  >weekly <span>SERVICES</span></h2>
<div class="service-item-outer">
    <div class="row">
        
        <div class="col-sm-4 col-md-push-2">
            <div class="service-item gray">
                <div class="service-item-image">
                    <img class="img-responsive" src="https://images.pexels.com/photos/65922/church-altar-building-germany-65922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </div>
                <h2 class="service-item-heading">weekend services<br />
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
                    <h2 class="service-item-heading">weekday service<br/>
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
                    <h2 class="service-item-heading">Children's Club<br />
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
                    <h2 class="service-item-heading">weekly prayer group<br />
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
                    <h2 class="service-item-heading">spanish bereavement group<br />
                    </h2>
                    <p class="service-time">Last Monday each month, 7:30 p.m., chapel</p>                      
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
    <br />
</div>  
  </div>;

export default Calendar;
