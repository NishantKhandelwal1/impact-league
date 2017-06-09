import React from 'react';
import logo from './../images/content-image.png';

export default class LeagueSection extends React.Component{
  render(){
    return(

            <div className="row">
                <div className="col-sm-7">
                    <div className="demo-content1">
                        <h2>IMPACT LEAGUE IS...</h2>
                        <p><strong>A month long online walk-o-run competition</strong></p>
                        <ul>
                            <li>Where employees form teams of 7 and compete to win the League cup (full-stop is not required here and elsewhere too)</li>
                            <li>Raise funds for a social cause while running/walking and get fit”  (sponsored by your company would confuse employee+companies)</li>

                        </ul>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="demo-content bg-alt">
                        <img className="img-responsive" src={logo} alt="img-league" />
                    </div>
                </div>
            </div>


    );
  }
}
