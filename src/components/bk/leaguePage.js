import React, {Component} from 'react';
import Select from 'react-select';
import Background from './../images/Background.jpg';

var sectionStyle = {

backgroundImage: ' url(' + Background+')',
/* Full height */
   height: "100%",

   /* Center and scale the image nicely */
   backgroundPosition: "center",
   backgroundRepeat: "no-repeat",
   backgroundSize: "cover"
};

var leagueData;
class LeaguePage extends Component {

  constructor(props){
    super(props);
    var path = window.location.pathname;
    path = path.split("/");
    path = path[2];
    this.fetchLeagueData(path);
    this.TextSubmit= this.TextSubmit.bind(this);

    console.log(path);
    this.state={
      leagueName:path,
      data:null,
      leagueType:closed
    }
  }
  TextSubmit(){
    console.log("Button Clicked");
    console.log(this.props.history);
    this.props.history.push('/');
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
    }).catch((err)=>{
      console.log("err",err);
    })
  }

  render(){

  //  var res = this.state.leagueName;
    // console.log("League Name",a[2]);
    //console.log("Log", res.slice(1, 5));
    if(this.state.data != null){
      leagueData = this.state.data;
      return(
<div style={sectionStyle}>
        <div className="container-fluid "  >
              <div className="container">
                  <div className="row">
                      <header>
                          <h2 style={{color:"#fff"}}>{this.state.data.impactleague_name}</h2>
                      </header>
                  </div>

                  <div className="row">
                      <div className="col-sm-6">
                          <div>
                              <img className="img-responsive" src={this.state.data.impactleague_banner} />
                          </div>
                      </div>
                      <div className="col-sm-4 pad0">
                          <div>
                            <Registration/>
                          </div>
                      </div>
                  </div>

              </div>

              <footer></footer>
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
class Registration extends Component {

constructor(props){
  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleOptionChange = this.handleOptionChange.bind(this);
  this.validateEmail = this.validateEmail.bind(this);

  this.state = {
    selectedOption:null,
    error:null
  }

}

handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }
validateEmail =(email) => {
//return re.test(email);
var domain = email.substring(email.lastIndexOf("@") +1);
if(domain === leagueData.email_type)
{
  return true;
}
else{

  this.setState =({
    error:"Please enter valid id"
  });
  alert(this.state.error);
}
}
validatePhone = (phone) =>{

}
  handleSubmit(event){
    event.preventDefault();
    if(this.validateEmail(this.refs.email.value)){
      console.log("Mobile Number : ",this.refs.mobile.value.length);

        // const formData = {
        //   impactleague: 9,
        //   team: this.refs.team.value,
        //   email_id: this.refs.email.value,
        //   name: this.refs.name.value,
        //   phone_number: this.refs.mobile.value,
        // }

        const formData = {
          impactleague: 9,
          team_name: "Welspun",
          team_captain:"Nishant",
          team_captain_email_id: "nishant@coal.com",
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
        .then(response =>(response.json()))
        .then((response)=>{
          console.log("response",response);

        }).catch((err)=>{
          console.log("err",err);
        })

    }

    console.log("form Submitted");
  }

  render(){
    var component;



    if (this.state.selectedOption !== "Create Your Team") {
      component = (
        <div><div className="form-group">
                      <select type="text" className="form-control" id="Department" name="Department" placeholder="Department" required>
                      // <option>Choose Departmant</option>
                      //   <option>WIL</option>
                      //   <option>HIL</option>
                      //   <option>TIL</option>
                        </select>
                  </div>
                  <div className="form-group">
                                  <input type="text" className="form-control" id="Team_Name" name="Team Name" placeholder="Team Name" required/>
                              </div>
                              </div>
                );
    } else {
      component = (
        <div><div className="form-group">
                      <select type="text" className="form-control" id="Department" name="Department" placeholder="Department" required>
                      // <option>Choose Departmant</option>
                      //   <option>WIL</option>
                      //   <option>HIL</option>
                      //   <option>TIL</option>
                        </select>
                  </div>
        <div className="form-group">
                      <select type="text" className="form-control" id="Department" name="Department" placeholder="Department" required>
                      <option>Choose Existing Team</option>
                        <option>Spartans</option>
                        <option>Mumbai Warriors</option>
                        <option>Marathon</option>
                        </select>
                  </div>
                  </div>
        );
    }

    if(leagueData.module === "open"){
      return(

            <div className="row">
                <h2>Open League Registration</h2>
                <div className="col-md-12">
                    <div className="form-area">
                        <form role="form" onSubmit={this.handleSubmit}>
                            <br style={{clear: "both"}}/>
                            <div className="form-group">
                                <input type="text" className="form-control" maxLength="20" ref="name" name="name" placeholder="Captain Name" required/>

                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" ref="email"  name="email" placeholder="Email" required/>
                                <div><p>{this.state.error}</p></div>
                            </div>
                            <div className="form-group">
                                <input type="number" className="form-control" ref="mobile" name="mobile" placeholder="Mobile Number" required/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" ref="team" name="team" placeholder="Team Name" required/>
                            </div>
                            <button type="submit" id="submit" name="submit" className="btn btn-primary">Submit Form</button>
                        </form>
                    </div>


            </div>
</div>
      )
    }
    else{
      return(
        <div className="container">
    <div className="row">
        <h2>Closed League Registration</h2>
        <div className="col-md-5">
            <div className="form-area">
                <form role="form" onSubmit={this.handleSubmit}>
                    <br style={{clear: "both"}}/>

                    <div className="form-group">
                        <input type="text" className="form-control" ref="name" name="name" placeholder="Name" required/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" ref="email" name="email" placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                        <input type="phone" className="form-control" ref="mobile" name="mobile" placeholder="Mobile Number" required/>
                    </div>

                    <div className="radio col-sm-6">
                        <label>
                            <input type="radio" value="Create Your Team" checked={this.state.selectedOption==='Create Your Team' } onChange={this.handleOptionChange} /> Create Your Team
                        </label>
                    </div>
                    <div className="radio col-sm-6">
                        <label>
                            <input type="radio" value="Join a Team" checked={this.state.selectedOption==='Join a Team' } onChange={this.handleOptionChange}/> Join a Team
                        </label>
                    </div>

                  {component}
                    <button type="submit" id="submit" name="submit" className="btn btn-primary">Submit Form</button>
                </form>
            </div>
        </div>

    </div>
</div>
      )
    }

  }
}

// <div>
//   <h2>{this.state.data.impactleague_name}</h2>
// <div>
// <img style={{width:400,height:200}}src = {this.state.data.impactleague_banner_site}/>
// </div>
// <p style={{color:"#000000"}}>{this.state.data.form_description}</p>
// <button onClick={this.TextSubmit}>Submit</button>
// </div>

export default LeaguePage;
