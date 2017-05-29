import React from 'react';
import Hero from './../images/hero.jpg';
import Cairn from './../images/cairn.jpg';
import Barclays from './../images/barclays.jpg';
import Aarti from './../images/aarti.jpg';

export default class LeagueSponser extends React.Component{
  render(){
    return(
      <div className="row">
          <div className="col-sm-12">
              <div className="demo-content1">
                  <h3>OUR PARTNERS</h3>
                  <div className="col-sm-3 sponser">
                    <img className="img-responsive" src={Hero}  alt="sponser-hero"/>
                  </div>
                  <div className="col-sm-3 sponser">
                    <img className="img-responsive" src={Cairn} alt="sponser-cairn"/>
                  </div>
                  <div className="col-sm-3 sponser">
                    <img className="img-responsive" src={Barclays} alt="sponser-barclays"/>
                  </div>
                  <div className="col-sm-3 sponser">
                    <img className="img-responsive" src={Aarti} alt="sponser-aarti"/>
                  </div>

              </div>
          </div>

      </div>

    );
  }
}
