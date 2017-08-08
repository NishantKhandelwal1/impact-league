import React, {Component} from 'react';
//import Select from 'react-select';
import Background from './../images/Background.jpg';
import AppStore from './../images/appStoreIcon.png';
import GooglePlay from './../images/googleplayIcon.png';
import ImpactLogo from './../images/logo_large.png';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
//import Dropdown from './dropdown';
var sectionStyle = {

backgroundImage: ' url(' + Background+')',
/* Full height */
   height: "100%",
   /* Center and scale the image nicely */
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover"
};
var screenSize =  window.innerWidth;
//var buttonFont=screenSize <="360"?"12px": null;

// var headerLogo = {
//    fontSize :(screenSize <="400"? "19px":"36px"),
//    color:"#ffffff",
//    fontFamily:"montserratsemibold"
//  }

var leagueURL;
var clientHeight;
var leagueData;
class LeaguePage extends Component {

  constructor(props){
    super(props);
    leagueURL = window.location.pathname;
  var path = leagueURL.split("/");
    path = path[2];
    this.fetchLeagueData(path);
    this.state={
      leagueName:path,
      data:null,
      leagueType:closed

    }
  }

//   let capitalize = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }
  fetchLeagueData(leagueName){

    // var url = "https://api.myjson.com/bins/soslf";


    var url = "http://dev.impactrun.com/impactleague/"+ leagueName.toLowerCase();

    fetch(url,{
      method:"get"
    })
    .then(response =>(response.json()))
    .then((response)=>{

      this.setState({
        data:response.results[0],
      })
        leagueData = this.state.data;
    }).catch((err)=>{
    //  console.log("err",err);
    })
  }

  render(){

  //  var res = this.state.leagueName;
    // console.log("League Name",a[2]);
    //console.log("Log", res.slice(1, 5));
    if(this.state.data != null){

      return(
        <div style={screenSize>"770"? sectionStyle:null }>
            <div className="container-fluid" style={screenSize<="770" ? sectionStyle:null }>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <header style={{background: "transparent",paddingBottom: "20px"}}>
                                <span className="headerspan" >{this.state.data.impactleague_name}</span>
                            </header>
                        </div>
                    </div>

                    <div className="row" style={{marginBottom: "15px"}}>
                        <div className="col-md-7">
                            <img id="leagueBanner" alt="league-banner" className="img-responsive" src={this.state.data.impactleague_banner} />
                        </div>
                        <div className="col-md-5">
                            <Registration {...this.state.data}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7 col-sm-6 col-xs-12 know-more">

                            <small style={{color: "#90a1b5",fontFamily: "montserratregular"}}>To know more about the league click <a href="#">here.</a></small>

                        </div>
                        <div className="col-md-5 col-sm-6 col-xs-12">
                            <div className="img-wrap">
                                <a href="https://goo.gl/qJPjzb"><img className="img-responsive" src={AppStore} alt="Apple-link" /></a>
                                <a href="http://www.impactrun.com/#/AppDownload"><img className="img-responsive" src={GooglePlay} alt="Anroid-link" /></a>
                            </div>
                        </div>

                        <div className="col-md-12 col-sm-12 col-xs-12" style={{textAlign: "center",minHeight:"91px"}}>
                            <img src={ImpactLogo} alt="company-logo" style={{width: "170px"}}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
);
    }else{
      return(
        <div id="loader" style={{zIndex: "10000",position: "fixed", height: "100%", width: "100%", background: "white"}}>
            <div className="loading"></div>
        </div>
      )
    }
  }
}
//var re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var selectedTeam;
var defaultIndex = -1;
class Registration extends Component {
constructor(props){
  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.goBack = this.goBack.bind(this);
  this.renderTeamNames =this.renderTeamNames.bind(this);

  this.state = {
    selectedOption:null,
    error:null,
    showTextModel:false,
    display:"block",
    display2:"none",
    display3:"block",
    display4:"none",
    display5:"none",
    display6:"none",
    display7:"none",
    data:null,
    errorText:'',
  }

}

componentDidMount(){
clientHeight = document.getElementById('leagueBanner').clientHeight;

this.renderTeamNames();

}


showTeamTextInput(){
    if(this.refs.email.value !=="" && this.refs.name.value !== ""){
      if(this.refs.email.value.substring(this.refs.email.value.lastIndexOf("@") +1) ===  leagueData.email_type ){
        if (this.refs.mobile.value==="" || this.refs.mobile.value.match(/^\d{10}$/)) {

          this.setState({
            Teamoption:"createTeam",
            showTextModel:true,
              display:"none",
              display2:"block",
              display6:"block",
              errorText:""
          })
      }else{
        this.setState({
          errorText:"Please fill out valid number"
        })

      }
    }else{
      this.setState({
        errorText:"Please fill out your official email id (impact@"+this.props.email_type + ")"
      })

    }
    }
    else{
      this.setState({
        errorText:"Please fill out required(*) fields"
      })
    }

}
showTeamTextInput2(){
  if(this.refs.email.value !=="" && this.refs.name.value !== ""){
    if(this.refs.email.value.substring(this.refs.email.value.lastIndexOf("@") +1) ===  leagueData.email_type ){
      if (this.refs.mobile.value==="" || this.refs.mobile.value.match(/^\d{10}$/)) {

        this.setState({
          Teamoption:"JoinTeam",
          showTextModel:true,
          display:"none",
          display2:"block",
          display7:"block",
            errorText:""
        })
    }else{
      this.setState({
        errorText:"Please fill out valid number"
      })

    }
  }else{

    this.setState({
      errorText:"Please fill out your official email id (impact@"+this.props.email_type + ")"
    })

  }
  }
  else{
    this.setState({
      errorText:"Please fill out required(*) fields"
    })
  }
}
goBack(){
  this.setState({
    display:"block",
    display2:"none",
    errorText:"",
    display6:"none",
    display7:"none"

  })
}

renderTeamNames(){

            fetch('http://dev.impactrun.com/api/team/?impactleague='+ this.props.id, {
                    method: 'GET',
                })
                .then(response => (response.json()))
                .then((response) => {
                  this.setState({
                      teamObject:response,
                    })
                }).catch((err) => {
                    //console.log("err", err);
                })

}
selectTeam(){
  defaultIndex = this.refs.teamSelector.value;
  let a = this.refs.teamSelector.value;
if(a !== -1){
    selectedTeam = this.state.teamObject[a];
}

}

renderTeam(){
  if (this.state.showTextModel === true){
    if(this.state.Teamoption === "createTeam"){
    return(
      <div>
    <div className="form-group" style={{display:this.state.display2}}>
        <input type="text" className="form-control" ref="team" placeholder="Your Team Name*" />
    </div>
    <div className="row">
    <div className="form-group col-sm-6 col-xs-6">
          <a href="#" className="btn-custom" style={{display:this.state.display2,backgroundColor:"#ffffff",color:"#000000"}} onClick={()=> this.goBack()}>BACK</a>
    </div>
    <div className="form-group col-sm-6 col-xs-6" >
          <button type="submit" id="submit" style={{display:this.state.display2,width:"100%",borderColor: "transparent"}} name="submit" className="btn-custom" >CREATE</button>
    </div>
    </div>
      </div>
   );
  }else{

        var teamList = this.state.teamObject.map((options,index)=>{
          return options.team_captain === null ? "": <option key={options.id} value={index}>{`${options.team_name} | ${options.team_captain}`}</option>
        });
      return(
        <div>
            <div className="form-group"  style={{display:this.state.display2}}>

              <select ref="teamSelector" onChange={ (e) => {this.selectTeam();} } defaultValue="-1" className="form-control">
                 <option key="-1" value="-1" >Choose a team to join</option>
              {teamList}
              </select>
            </div>
            <div className="row">
                <div className="form-group col-sm-6 col-xs-6">
                      <a href="#" className="btn-custom" style={{display:this.state.display2,backgroundColor:"#ffffff",color:"#000000"}} onClick={()=> this.goBack()}>BACK</a>
                </div>
                <div className="form-group col-sm-6 col-xs-6">
                      <button type="submit" id="submit" style={{display:this.state.display2,width:"100%"}} name="submit" className="btn btn-custom" >JOIN</button>
                </div>
            </div>
        </div>
      )
    }
}else{

  return;
}
}


  handleSubmit(event){
    event.preventDefault();
  if(this.state.Teamoption === "createTeam"){
    if(this.refs.team.value !==""){

      const formData = {
          impactleague: 9,
          team_name: this.refs.team.value,
          team_captain: this.refs.name.value,
          team_captain_email_id: this.refs.email.value,
          team_captain_phone:this.refs.mobile.value
      }

      function handleErrors(response) {
          if (response.status === 400) {
              this.setState({
                errorText: "Team already exist"
              })

              throw Error(response.statusText);
          }
          return response.json();
      }
      fetch('http://dev.impactrun.com/api/team/', {
              method: 'POST',
              mode: 'cors',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData)
          })
          .then(handleErrors.bind(this))

          .then((response) => {

            this.setState({
                display: "none",
                display2: "none",
                displayResponse: "true",
                errorText:"",
                display3:"none",
                display4:"block",
                display6:"none",
                data:response
            })
            }).catch((err) => {
            //  console.log("err", err);

            })

    }
    else{

      this.setState({
        errorText:"Please fill out your team name"
      })
    }

  }
  else{

    if(defaultIndex != -1){
        const formData = {
          impactleague:9,
          team:selectedTeam.id,
          team_mate_name:selectedTeam.team_name,
          team_mate_email_id:this.refs.email.value,
          team_mate_phone:this.refs.mobile.value

        }

        function handleErrors(response) {
            if (response.status === 406) {
                this.setState({
                  errorText: "Oops ! That team is full. Pick another one"
                })

                throw Error(response.statusText);
            }
            if (response.status === 400) {
                this.setState({
                  errorText: "The email address you have enterd is already registered"
                })

                throw Error(response.statusText);
            }
            if (response.status === 500) {
                this.setState({
                  errorText: "Error occured !! Please try again. "
                })

                throw Error(response.statusText);
            }
            if(response.status === 200 || response.status === 201){

              return response.json();
            }
        }

          fetch('http://dev.impactrun.com/api/teammate/', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(handleErrors.bind(this))
            .then((response) => {

              this.setState({
                  display: "none",
                  display2: "none",
                  displayResponse: "true",
                  errorText:"",
                  display3:"none",
                  display5:"block",
                  data:selectedTeam,
                  display7:"none"
              })
                }).catch((err) => {
                //  console.log("err", err);
                })
        // this.setState({
        //     display: "none",
        //     display2: "none",
        //     displayResponse: "true",
        //     errorText:"",
        //     display3:"none",
        //     display5:"block",
        //     data:selectedTeam
        // })
      }
  else{
    this.setState({
      errorText:"Please select existing team"
    })
  }


  }
}

  render(){
  let createImpact="Time to make an impact. Let's do it !";
clientHeight = screenSize >= 780?clientHeight+"px":"";

  return(

    <div className="form-wrap-right">
        <h4 className="appearance" style={{display:this.state.display}}>Impact League Registration</h4>
        <small className="appearance" style={{display:this.state.display}}>Simply fill your details,<br/>Register as a Captain or a Team-member to get your secret code<br/><br/></small>

      <small className="appearance" style={{display:this.state.display}}>{createImpact}</small>
        <small className="appearance" style={{display:this.state.display6}}>Special prizes for the coolest and most innovative team name.<br/>So give it a quick thought :)</small>
        <small className="appearance" style={{display:this.state.display7}}><br/>Pick your 'Team and Captain' from the drop-down below. Only 7 total members per team</small>
        <span style={{color:"red",fontFamily:"montserratregular",fontSize:"12px"}}>{this.state.errorText}</span>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="form-area " style={{display:this.state.display3}}>
                <form role="form" className="depend" onSubmit={this.handleSubmit.bind(this)} >
                    <br style={{clear: "both"}}/>
                    <div className="row" style={{display:this.state.display}} >
                        <div className="form-group col-sm-6">
                            <input type="text" className="form-control" ref="name" name="name" placeholder="Full Name*" required/>
                        </div>
                        <div className="form-group col-sm-6">
                            <input type="phone" className="form-control" ref="mobile" name="mobile" placeholder="Mobile Number"/>
                        </div>
                    </div>
                    <div className="form-group" style={{display:this.state.display}} >
                        <input type="email" className="form-control" ref="email" name="email" placeholder="Official Email Id*" required/>
                    </div>
                    <div className="row" style={{display:this.state.display}}>
                        <div className="form-group col-sm-6 col-xs-6">
                            <a href="javascript:void(0)" className="btn-custom " style={{width:"100%"}} onClick={()=> this.showTeamTextInput()}> BE A CAPTAIN</a>

                        </div>
                        <div className="form-group col-sm-6 col-xs-6">
                            <a href="javascript:void(0)" className="btn-custom" onClick={()=> this.showTeamTextInput2()} style={{width:"100%"}}>JOIN TEAM</ a>
                        </div>
                    </div>
  {this.renderTeam()}
                </form>
            </div>
            <div style={{display:this.state.display4}}>
                <h4 className="appearance">Awesome !</h4>
                <small className="appearance">We have created your team. Your secret code is <br/><br/>
                <span className="appearance" style={{fontSize:"18px",fomtWeight:"bold"}}>{this.state.data === null?"":this.state.data.team_code}</span>
                <br/>Call 6 more to join your team using this <a href={leagueURL} style={{fontWeight:"bold",textDecoration:"underline"}}>link</a>
                <br/>Once they register into your team, share the above code with them.
                </small>
            </div>
            <div className="col-sm-12" style={{display:this.state.display5}}>
            <div className="row">
            <h4 className="appearance">Awesome !</h4>
            <small className="appearance">
            You have successfully registered for the league. Your Captain is <large style={{fontWeight:"bold"}}>{this.state.data === null?"":this.state.data.team_captain}</large>.
            <br/>Please ping <large style={{fontWeight:"bold"}}>{this.state.data === null?"":this.state.data.team_captain}</large> for your secret code at
            <large style={{fontWeight:"bold"}}><a href={this.state.data === null?"":"mailto:" +this.state.data.team_captain_email_id}>{this.state.data === null?"":" "+this.state.data.team_captain_email_id}</a></large>
            <br/>We begin on <large style={{fontWeight:"bold"}}>{this.props.start_date}</large>. Let&#39;s Go
            <br/>
            <div className="img-wrap" >
                        <a href="http://www.onelink.to/impactrun" target="_blank" style={{fontWeight:"bold"}}>DOWNLOAD HERE</a>
            </div>

              May your Outdoor Jogs and Walks Win you the {this.props.impactleague_name}
            </small>
            </div>

            </div>
        </div>
</div>
    </div>

      )
    }

  }



export default LeaguePage;
