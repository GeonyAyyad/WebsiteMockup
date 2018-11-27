import React from "react";
import "./Donate.css";
  



const style = {
  width: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  textAlign: "center",

}

const Donate = props =>
<div className="donation-container">
            
<div className="donation-box">
  <div className="title">Donation Information</div>
  
  <div className="fields">
    <input type="text" id="firstName" placeholder="First Name"/>
    <input type="text" id="lastName" placeholder="Last Name"/>
    <input type="text" id="email" placeholder="Email"/>
    <br />
    <br />
  </div>
  
    <div className="amount">
      <div className="button1">$1</div>
      <div className="button1">$5</div>
      <div className="button1">$10</div>
      <div className="button1">$<input type="text" className="set-amount" placeholder=""/>
    </div>
  </div>
  
  <div className="switch">
<input type="radio" className="switch-input" name="view" value="One-Time" id="one-time" checked=""/>
<label for="one-time" className="switch-label switch-label-off">One-Time</label>
<input type="radio" className="switch-input" name="view" value="Monthly" id="monthly" />
<label for="monthly" className="switch-label switch-label-on">Monthly</label>
<span className="switch-selection"></span>
</div>

<div className="checkboxes">
  <input type="checkbox" id="receipt" className="checkbox1" />
  <label for="receipt">Email Me A Receipt</label>
<br />
<input type="checkbox" id="anon" className="checkbox1" />
<label for="anon">Give Anonymously</label>
<br />
<input type="checkbox" id="list" className="checkbox1" />
<label for="list">Add Me To Email List</label>
</div>

<div className="confirm">

</div>
  
  <div className="donate-button"><i className="fa fa-credit-card"></i> Donate Now</div>
</div>

</div>
;

export default Donate;
