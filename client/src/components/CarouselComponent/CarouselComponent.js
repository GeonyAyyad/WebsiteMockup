import React from "react";
import {Carousel } from 'react-bootstrap';

const style = {
  

}

const CarouselComponent = props =>
  <div>

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


  </div>;

export default CarouselComponent;
