import React from 'react';

export default class GraySection extends React.Component{
  render(){
    return(
      <div className="gray-section">

    <div className="container">
        <div className="row ">
            <h2>BENEFITS  </h2>
        </div>
        <div className="row row-eq-height">
            <div className="col-sm-3 box-content">
                <div className="box">
                    <h3 style={{textAlign:"center"}}>5 kg</h3>
                    <p>Average weight loss of overweight players</p>

                </div>
            </div>


            <div className="col-sm-3 box-content">
                <div className="box">
                    <h3 style={{textAlign:"center"}}>82%</h3>
                    <p>Testify to feel fitter</p>
                </div>

            </div>

            <div className="col-sm-3 box-content">
                <div className="box">
                    <h3 style={{textAlign:"center"}}>4X</h3>
                    <p >Increase in profit per employee</p>
                </div>
            </div>

            <div className="col-sm-3 box-content">
                <div className=" box">
                    <h3 style={{textAlign:"center"}}>97%</h3>
                    <p>Marketing executives support cause-based marketing</p>
                </div>
            </div>

        </div>

    </div>
</div>

    );
  }
}
