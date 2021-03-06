import React from 'react';
import { Carousel } from 'react-bootstrap/lib/';
import Vijay from './../images/VijaySethi.jpg';
import Satya from './../images/satya.jpg';
import Pawan from './../images/pawankumar.jpeg';
import Mirik from './../images/Mirik.JPG';

const CarouselInstance =({index,direction,handleSelect})=> {

return (

  <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>

    <Carousel.Item>
    <div className="box carousel-height">
        <div className="item">
            <blockquote>
                <div className="row">
                    <div className="col-sm-3 text-center">
                        <img className="img-circle img-custom" src={Vijay}  alt="img-keizgoesboom"/>
                    </div>
                    <div className="col-sm-9 content">
                        <p id="text">As a support partner of Hero Impact League, ImpactRun has done appreciable work. Their implementation team was always ready to support our employees. Their employees are very professional and dedicated. ImpactRun&#39;s dedication towards work & commitment to outcomes & impact is really commendable.</p>
                        <small>Vijay Sethi (CSR head & CIO of Hero Motocorp)</small>
                    </div>
                </div>
            </blockquote>
        </div>

    </div>

    </Carousel.Item>
    <Carousel.Item>
    <div className="box carousel-height">
        <div className="item">
            <blockquote>
                <div className="row">
                    <div className="col-sm-3 text-center">

                          <img className="img-circle img-custom"  src={Mirik}  alt="img-keizgoesboom"/>
                    </div>
                    <div className="col-sm-9 content">
                    <p id="text">The concept of Impact league truly resonated with our Employees.
                    We saw great participation across the organizational structure. The employees really liked the fact that their efforts were affecting the society in a positive manner.
                    We are looking forward to Season 2 and hoping for even greater participation.</p>
                    <small>Mirik Gogri (Manager, Aarti Industries)</small>

                    </div>
                </div>
            </blockquote>
        </div>

    </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="box carousel-height">
        <div className="item">
            <blockquote>
                <div className="row">
                    <div className="col-sm-3 text-center">

                          <img className="img-circle img-custom"  src={Pawan}  alt="img-keizgoesboom"/>
                    </div>
                    <div className="col-sm-9 content">
                    <p id="text">This is fantastic application for both the body and the soul. The league has made the entire concept of running for a cause even more interesting. I never thought I would wake up early morning to run. But the noble cause associated makes it worth the effort.</p>
                    <small>Pawan Kumar Singh (Employee, Hero MotoCorp)</small>

                    </div>
                </div>
            </blockquote>
        </div>

    </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="box carousel-height">
        <div className="item">
            <blockquote>
                <div className="row">
                    <div className="col-sm-3 text-center">
                        <img className="img-circle img-custom" src={Satya} alt="img-keizgoesboom"/>

                    </div>
                    <div className="col-sm-9 content">
                    <p id="text">I would like to thank ImpactRun & Hero MotoCorp for helping us serve those who protect our nation.
                    It is very challenging and has seeped into my lifestyle. </p>
                    <small>Satya Sunder Behera</small>
                    </div>
                </div>
            </blockquote>
        </div>

    </div>
    </Carousel.Item>
  </Carousel>
);
}

export default CarouselInstance;
