import React from 'react';
import './About.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Building from "./AboutBuilding.jpg"
import Chair from "./AboutChair.jpg"
import Screen from "./AboutScreen.jpg"
import Openings from "./AboutOpeningTime.png"
import Tickets from "./AboutTickets.png"
import Values from "./AboutValues.png"
import Location from "./AboutLocation.png"
const About = () => {
  return (
    <div>

      <h2><span>About Us</span></h2>  
      <img className="openings-image" src={Openings} alt="Openings"/>
      <img className="tickets-image" src={Tickets} alt="Tickets"/>
      <img className="values-image" src={Values} alt="Values"/>
      <img className="location-image" src={Location} alt="Location"/>

      
      
       <h3><span>Who are We?.</span></h3>
      <p1>We are specialists in technology! With our expertise and cutting edge technology to bring you the perfect blend of innovation and entertainment.
     Step into our world of technological marvels and let us take you on an unforgettable cinematic adventure like no other. Welcome to the future of cinema.
     Still want to learn more? <a href="/contacts">Write to us!</a></p1>
      

    
      <h1><span>A preview of our new state of the art cinema.</span></h1>
      <Carousel>
        <div>
          <img src={Building} alt="Site" />
       
        </div>
        <div>
          <img src={Chair} alt="Seating" />
          
        </div>
        <div>
          <img src={Screen} alt="Screen" />
          
        </div>
        <p1>This top of the line new cinema will change the industry forever</p1>
        
      </Carousel>
      
    

    

    </div>
  
  );
};


export default About;

