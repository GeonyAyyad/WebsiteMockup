import React from "react";
import "./LiveFeed.css";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonShare,
  } from 'react-awesome-button';
  import 'react-awesome-button/dist/styles.css';
  import 'react-awesome-button/dist/themes/theme-blue.css';



const style = {
  olor: 'white',
      fontSize: 200

}

const LiveFeed = props =>
  <div>
    <div id="music" >
	<div class="parallax">
		
	</div>
	<div class="container">
		<div>
			<h2>Live Service</h2>
			<p>We are broadcasting our services for those who can not attend.</p>
			<hr />
			<div class="buttonWrap">
      <AwesomeButton type="primary" href="https://blessedsacrament-brooklyn.org/contact-us-directions/">This Week's Schedule </AwesomeButton>				
      <p> &nbsp; </p><AwesomeButton type="primary" href="https://blessedsacrament-brooklyn.org/contact-us-directions/">Past Sermons </AwesomeButton>
			</div>
		</div>
		<div>
			<span>
				<img width="990" height="990" src="https://png2.kisspng.com/20180406/roq/kisspng-christian-church-parish-youtube-christian-ministry-church-5ac7be83125f63.8859666515230398750753.png" 
				class="attachment-full size-full" 
				alt="" 
				srcset="https://png2.kisspng.com/20180406/roq/kisspng-christian-church-parish-youtube-christian-ministry-church-5ac7be83125f63.8859666515230398750753.png 990w, https://enjoy.church/au/wp-content/uploads/2018/01/kingdom-come-150x150.png 150w, https://enjoy.church/au/wp-content/uploads/2018/01/kingdom-come-300x300.png 300w" 
				sizes="(max-width: 990px) 100vw, 990px" />
			</span>
		</div>
	</div>
</div>
  </div>;

export default LiveFeed;
