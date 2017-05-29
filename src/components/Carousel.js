import React from 'react';


export default class Carousel extends React.Component {
  render(){
    return (
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
    /*-------Indicators------- */
    <ol className="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    </ol>

    /*-- Wrapper for slides --*/
    <div className="carousel-inner">
        <div className="item active">
            <div className="box">
                <div className="item">
                    <blockquote>
                        <div className="row">
                            <div className="col-sm-3 text-center">
                                <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/keizgoesboom/128.jpg"  alt="img-comment1"/>

                            </div>
                            <div className="col-sm-9">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</p>
                                <small>Someone famous</small>
                            </div>
                        </div>
                    </blockquote>
                </div>

            </div>
            <div className="item">
                    <div className="box">
                        <blockquote>
                            <div className="row">
                                <div className="col-sm-3 text-center">
                                    <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/keizgoesboom/128.jpg" alt="img-comment2" >
                                    </img>
                                </div>
                                <div className="col-sm-9">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</p>
                                    <small>Someone famous</small>
                                </div>
                            </div>
                        </blockquote>

                    </div>

                </div>
                <div className="item">
                       <div className="box">
                           <blockquote>
                               <div className="row">
                                   <div className="col-sm-3 text-center">
                                       <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/keizgoesboom/128.jpg"  alt="img-comment3"></img>
                                   </div>
                                   <div className="col-sm-9">
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</p>
                                       <small>Someone famous</small>
                                   </div>
                               </div>
                           </blockquote>
                       </div>

                   </div>

        </div>

    </div>

    /*-- Controls -----*/
    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
    </a>
</div>
/*-- Carousel --*/
    );
  }
}
