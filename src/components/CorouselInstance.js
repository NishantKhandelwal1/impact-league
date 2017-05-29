import React from 'react';
import { Carousel } from 'react-bootstrap/lib/';


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
                        <small>Someone famous</small>
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
                        <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/keizgoesboom/128.jpg" style={{width:'100px'}} alt="img-keizgoesboom"/>

                    </div>
                    <div className="col-sm-9">
                        <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</p>
                        <small>Someone famous</small>
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
                        <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</p>
                        <small>Someone famous</small>
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
