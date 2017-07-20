import React, {Component} from 'react';
//import Select from 'react-select';
import Background from './../images/Background.jpg';
import AppStore from './../images/app-store-white.png';
import GooglePlay from './../images/googleplay1.png';
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
var buttonFont=screenSize <="360"?"12px": null;

var headerLogo = {
   fontSize :(screenSize <="400"? "19px":"36px"),
   color:"#ffffff",
   fontFamily:"montserratsemibold"
 }


var clientHeight;
var leagueData;
class LeaguePage extends Component {

  constructor(props){
    super(props);
    var path = window.location.pathname;
    path = path.split("/");
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
    var league =leagueName.toLowerCase();
      console.log("leagueName",league);
    var url = "http://dev.impactrun.com/impactleague/"+ leagueName;

    fetch(url,{
      method:"get"
    })
    .then(response =>(response.json()))
    .then((response)=>{
      console.log("response",response.results[0]);
      this.setState({
        data:response.results[0],
      })
        leagueData = this.state.data;
    }).catch((err)=>{
      console.log("err",err);
    })
  }

  render(){

  //  var res = this.state.leagueName;
    // console.log("League Name",a[2]);
    //console.log("Log", res.slice(1, 5));
    if(this.state.data != null){

      return(
        <div style={screenSize>="400"? sectionStyle:null }>
              <div className="container-fluid" style={screenSize<="400"? sectionStyle:null }>
                <div className="container" >
                    <div className="row">
                        <header style={{background: "none"}}>
                            <span style={headerLogo}>{this.state.data.impactleague_name}</span>
                        </header>
                    </div>

                        <div className="row">
                            <div className="col-md-7" >
                                <div className="row" style={{margin:"10px",border: "6px solid #f5f5f5",borderRadius: "4px"}} >

                                    <img id="leagueBanner" alt="league-banner" className="img-responsive" src={this.state.data.impactleague_banner} />
                                </div>
                            </div>
                            <div className="col-md-5">
                              <Registration league={this.state.data.id}/>
                            </div>
                        </div>
                        <div className="row" style={{margin:"10px"}}>
                          <div className="col-md-6" >
                            <div className="row" style={{marginTop:"30px",textAlign:"center"}}>
                                  <small style={{color:"#90a1b5",fontFamily:"montserratregular"}}>To know more about the league click <a href="#">here.</a></small>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6">
                            <div className="row" style={{margin:"10px"}}>
                              <a href="https://goo.gl/qJPjzb"><img className="img-responsive"  src={AppStore} alt="Apple-link" /></a>
                            </div>
                          </div>
                          <div className="col-md-3 col-sm-6">
                              <div className="row" style={{margin:"10px"}}>
                                    <a href="http://www.impactrun.com/#/AppDownload" ><img className="img-responsive"  src={GooglePlay} alt="Anroid-link"/></a>
                              </div>
                          </div>

                        </div>


                    <footer></footer>
                </div>
            </div>
      </div>
);
    }else{
      return(
        <div>
        <h2>Loading....</h2>
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
    data:null,
    errorText:'',
  }

}

componentDidMount(){
clientHeight = document.getElementById('leagueBanner').clientHeight;
console.log("League",this.props.league);
this.renderTeamNames();

}


showTeamTextInput(){
  console.log("League Data",leagueData);
    if(this.refs.email.value !=="" && this.refs.name.value !== ""){
      if(this.refs.email.value.substring(this.refs.email.value.lastIndexOf("@") +1) ===  leagueData.email_type ){
        if (this.refs.mobile.value.length === 10 || this.refs.mobile.value==="") {

          this.setState({
            Teamoption:"createTeam",
            showTextModel:true,
              display:"none",
              display2:"block",
              errorText:""
          })
      }else{
        this.setState({
          errorText:"Please fill out valid number"
        })
        console.log("no number");
      }
    }else{
      this.setState({
        errorText:"Please fill out valid email id."
      })
        console.log("no email");
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
      if (this.refs.mobile.value.length === 10 || this.refs.mobile.value==="") {

        this.setState({
          Teamoption:"JoinTeam",
          showTextModel:true,
          display:"none",
          display2:"block",
            errorText:""
        })
    }else{
      this.setState({
        errorText:"Please fill out valid number"
      })
      console.log("no number");
    }
  }else{
    this.setState({
      errorText:"Please fill out your official email id."
    })
      console.log("no email");
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
    errorText:""
  })
}

renderTeamNames(){

            fetch('http://dev.impactrun.com/api/team/?impactleague='+ this.props.league, {
                    method: 'GET',
                })
                .then(response => (response.json()))
                .then((response) => {
                  this.setState({
                      teamObject:response,
                    })


                }).catch((err) => {
                    console.log("err", err);
                })

}
selectTeam(){
  console.log("Selected value",this.refs.teamSelector.value);

    defaultIndex = this.refs.teamSelector.value;



  let a = this.refs.teamSelector.value;
if(a !== -1){
    selectedTeam = this.state.teamObject[a];
}
  console.log(selectedTeam);
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
          <a href="#" className="btn btn-default" style={{display:this.state.display2}} onClick={()=> this.goBack()}>BACK</a>
    </div>
    <div className="form-group col-sm-6 col-xs-6" >
          <button type="submit" id="submit" style={{display:this.state.display2,width:"100%",backgroundColor:"#d667cd"}} name="submit" className="btn btn-primary " >CREATE</button>
    </div>
    </div>
      </div>
   );
  }else{
    console.log(this.state.teamObject);
        var teamList = this.state.teamObject.map((options,index)=>{
          return <option key={options.id} value={index}>{options.team_name}</option>
        });
      return(
        <div>
            <div className="form-group"  style={{display:this.state.display2}}>

              <select ref="teamSelector" onChange={ (e) => {this.selectTeam();} } defaultValue="-1" className="form-control">
                 <option key="-1" value="-1" >Choose from existing teams</option>
              {teamList}
              </select>
            </div>
            <div className="row">
                <div className="form-group col-sm-6 col-xs-6">
                      <a href="#" className="btn btn-default" style={{display:this.state.display2}} onClick={()=> this.goBack()}>BACK</a>
                </div>
                <div className="form-group col-sm-6 col-xs-6">
                      <button type="submit" id="submit" style={{display:this.state.display2,width:"100%",backgroundColor:"#d667cd"}} name="submit" className="btn btn-primary" >JOIN</button>
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
                data:response
            })
            }).catch((err) => {
              console.log("err", err);

            })

    }
    else{

      this.setState({
        errorText:"Please fill out your team name"
      })
    }

  }
  else{
    console.log("value",defaultIndex);

      if(defaultIndex != -1){
        const formData = {
          impactleague:9,
          team:selectedTeam.id,
          team_mate_name:selectedTeam.team_name,
          team_mate_email_id:this.refs.email.value,
          team_mate_phone:this.refs.mobile.value

        }



    console.log("Data",formData);
        fetch('http://dev.impactrun.com/api/teammate/', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response =>(response.json()))
            .then((response) => {

              this.setState({
                  display: "none",
                  display2: "none",
                  displayResponse: "true",
                  errorText:"",
                  display3:"none",
                  display5:"block",
                  data:selectedTeam
              })
                }).catch((err) => {
                  console.log("err", err);
                  this.setState({
                    errorText:"Error occured !! Please try again"
                  })
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
console.log("Data",this.state.data);
clientHeight = screenSize >= 780?clientHeight+"px":"";
console.log("clientHeight",clientHeight);

  return(

    <div className="row" style ={{backgroundColor:"#f5f5f5",padding:"15px",margin:"10px",minHeight:clientHeight,borderRadius: "4px"}}>
        <h4 className="appearance" style={{display:this.state.display}}>Register here</h4>
        <small className="appearance" style={{display:this.state.display}}>Just Fill in your details,<br/>Register as a Captain or a team member to get your secret code</small>
        <br/>
      <small className="appearance" style={{display:this.state.display}}>{createImpact}</small>
        <small className="appearance" style={{display:this.state.display2}}>Special prizes for Coolest and Most Innovative team name.<br/>So give it a quick thought :)</small>
           <br/><span style={{color:"red"}}>{this.state.errorText}</span>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="form-area" style={{display:this.state.display3}}>
                <form role="form" onSubmit={this.handleSubmit.bind(this)} >
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
                            <a href="javascript:void(0)" className="btn btn-custom " style={{width:"100%"}} onClick={()=> this.showTeamTextInput()}>CREATE TEAM</a>

                        </div>
                        <div className="form-group col-sm-6 col-xs-6">
                            <a href="javascript:void(0)" className="btn btn-custom" onClick={()=> this.showTeamTextInput2()} style={{width:"100%"}}>JOIN TEAM</ a>
                        </div>
                    </div>
  {this.renderTeam()}
                </form>
            </div>
            <div style={{display:this.state.display4}}>
              <h4 className="appearance">Awesome</h4>
              <small className="appearance">We have created your team. Your secret code is </small>
              <br/>
              <span className="appearance" style={{fontSize:"18px",textAlign:"center"}}>{this.state.data === null?"":this.state.data.team_code}</span>
            </div>
            <div style={{display:this.state.display5}}>
              <h4 className="appearance">Welcome</h4>
              <small className="appearance">You have successfully registered in the SuperHero League. Please ask secret code to the Captain which you need to enter in the ImpactRun app</small>
              <br/>
              <br/>
              <span className="appearance">Captain Name: {this.state.data === null?"":this.state.data.team_captain}</span>
              <br/>
              <span className="appearance">Captain Mail id: {this.state.data === null?"":this.state.data.team_captain_email_id}</span>
            </div>
        </div>
</div>
    </div>

      )
    }

  }



export default LeaguePage;
