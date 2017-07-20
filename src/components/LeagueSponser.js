import React from 'react';
import Hero from './../images/hero.jpg';
import Cairn from './../images/cairn.jpg';
import Barclays from './../images/barclays.jpg';
import Aarti from './../images/Aartiupdated.png';
import Welspun from './../images/welspun.gif';

export default class LeagueSponser extends React.Component{
  render(){
    return(
      <div className="row">

          <div className="demo-content1">
              <h2>OUR PARTNERS</h2>
              <div>
                  <ul className="flex-container">
                      <li className="flex-item">
                          <img style={{width: "150px",height: "100px"}} src={Hero} alt="sponser-hero" />
                      </li>
                      <li className="flex-item">
                          <img style={{width: "150px",height: "100px"}} src={Welspun} alt="sponser-welspun" />

                      </li>
                      <li className="flex-item">
                          <img style={{width: "150px",height: "100px"}} src={Aarti} alt="sponser-aarti" />
                      </li>
                      <li className="flex-item">
                          <img style={{width: "150px",height: "100px"}} src={Barclays} alt="sponser-barclays" />
                      </li>

                      <li className="flex-item">
                          <img style={{width: "150px",height: "100px"}} src={Cairn} alt="sponser-cairn" />
                      </li>

                  </ul>
              </div>
          </div>

      </div>

    );
  }
}
