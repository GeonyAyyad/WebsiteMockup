import React from "react";
import "./Blog.css";


const style = {
  width: "700px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  textAlign: "center",

}

const Blog = props =>
  <div>
  
  <a href="https://blessedsacramentca.org/">
    <div class="home-event-right center pastors-blog">
        <div class="home-video-block">
            <div class="home-video">
                <img width="300" height="200" src="https://s3-media2.fl.yelpcdn.com/bphoto/0VNQBG24qQTx-WlhkhcYjg/o.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" />
            </div>
        </div>
    </div>

  </a>

  <h5 class="most-recent-heading">Our School</h5>
  <h2 class="newest-sermon-heading">Academic Excellence and Social Commitment</h2>
  <p>
As a Catholic Academy, it is dedicated to sowing the seeds and laying the foundation, which will help students meet the challenges of the 21st Century. This is accomplished through an educational program which emphasizes formation in the Catholic Faith, academic excellence and social commitment.
</p>
<br />
  <a class="btn btn-green" href="https://go2cornerstone.com/help-without-hurting/">See More</a>

  
                                
  
  </div>;

export default Blog;
