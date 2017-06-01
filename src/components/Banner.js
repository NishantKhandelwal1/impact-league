import React from 'react';

import logo from './../images/banner2.jpg';


export default class Banner extends React.Component{

  render(){
    return(
      <div className="row banner">
          <div className="col-sm-5">
              <div className="demo-content">
                  <h1>ENGAGE EMPLOYEES WITH YOUR CSR&nbsp;MISSION.</h1>
              </div>
              <div className="banner-btn">
              <a href="#enquire-form" className="btn btn-primary btn-enquire btn btn-lg btn-default"> PARTNER WITH US</a>
              </div>
          </div>
          <div className="col-sm-7 pad0">
              <div className="demo-content bg-alt">
                  <img className="img-responsive img-ipad" src={logo} alt="img-banner" />
              </div>
          </div>
      </div>
    );
  }
}
