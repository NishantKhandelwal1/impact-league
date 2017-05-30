import React from 'react';
import { Carousel } from 'react-bootstrap/lib/';
import Vijay from './../images/VijaySethi.jpg';

const CarouselInstance =({index,direction,handleSelect})=> {
return (
  <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
    <Carousel.Item>
    <div className="box">
        <div className="item">
            <blockquote>
                <div className="row">
                    <div className="col-sm-3 text-center">
                        <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/keizgoesboom/128.jpg" style={{width:'100px'}}  alt="img-keizgoesboom"/>

                    </div>
                    <div className="col-sm-9 ">
                        <p id="text">“This is fantastic application which gives multiple happiness & benefits in one bucket. Its looks like more beneficial & challenging with hero League. I never thought that we wake up in early morning (at 5:00 am) for only running but we are doing it everyday!”</p>
                        <small>Pragya Sharma, Hero ImpactRunner</small>
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
                        <img className="img-circle" src={Vijay} style={{width:'100px'}} alt="img-keizgoesboom"/>

                    </div>
                    <div className="col-sm-9">
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
                        <img className="img-circle" style={{width:'100px'}} src="https://s3.amazonaws.com/uifaces/faces/twitter/keizgoesboom/128.jpg"  alt="img-keizgoesboom"/>

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
