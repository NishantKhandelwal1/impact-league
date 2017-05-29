import React from 'react';
import logo from './../images/content-image.png';

export default class LeagueSection extends React.Component{
  render(){
    return(

            <div className="row">
                <div className="col-sm-7">
                    <div className="demo-content1">
                        <h3>IMPACT LEAGUE IS...</h3>
                        <p><strong>A month long online walk-o-run competition</strong></p>
                        <ul>
                            <li> - Where employees form teams of 7 and compete to win the League cup.</li>
                            <li> - All while raising funds for a cause sponsored by your company.</li>

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
