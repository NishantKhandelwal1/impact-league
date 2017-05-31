import React from 'react';
import { Carousel } from 'react-bootstrap/lib/';
import Vijay from './../images/VijaySethi.jpg';
import Noimage from './../images/image-not-available.jpg';

const CarouselInstance =({index,direction,handleSelect})=> {
return (
  <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
    <Carousel.Item>
    <div className="box">
        <div className="item">
            <blockquote>
                <div className="row">
                    <div className="col-sm-3 text-center">
                        <img className="img-circle" src={Vijay} style={{width:'100px'}}  alt="img-keizgoesboom"/>
                    </div>
                    <div className="col-sm-9 ">
                        <p id="text">As a support partner of Hero Impact League, Impact Run has done appreciable work. Their implementation team was always ready to support our employees at all times while project was running.Their employees are very professional and dedicated.</p>
                        <small>Vijay Sethi (CSR head & CIO of Hero Motocorp)</small>
                    </div>
                </div>
            </blockquote>
        </div>

    </div>

    </Carousel.Item>
    <Carousel.Item>
    <div className="box">
        <div className="item">
            <blockquote>
                <div className="row">
                    <div className="col-sm-3 text-center">
                        <img className="img-circle" src={Noimage} style={{width:'100px'}} alt="img-keizgoesboom"/>

                    </div>
                    <div className="col-sm-9">
                        <p id="text">I would like to thank ImpactRun & Hero MotoCorp for helping us serve those who protect our nation
                        It is very challenging and has seeped into my lifestyle </p>
                        <small>Satya Sunder Behera</small>
                    </div>
                </div>
            </blockquote>
        </div>

    </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="box">
        <div className="item">
            <blockquote>
                <div className="row">
                    <div className="col-sm-3 text-center">
                        <img className="img-circle" style={{width:'100px'}} src={Noimage}  alt="img-keizgoesboom"/>

                    </div>
                    <div className="col-sm-9">
                        <p id="text">This is fantastic application for both the body and the soul. The league has made the entire concept of running for a cause even more interesting. I never thought I would wake up early morning to run. But the noble cause associated makes it worth the effort.</p>
                        <small>Pawan Kumar Singh</small>
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
