import React from 'react';


export default class LeagueForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      type: 'info',
      message: '',
      successmessage:'',
      response: "success"
    }

  }


  handleSubmit= (event) => {

    event.preventDefault();
    // Scroll to the top of the page to show the status message.

    this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
    setTimeout(() => {
                         this.setState({
                         successmessage:''
                         })
                     }, 5000);
  }



  /**
  * Submits form data to the web server.
  */
  sendFormData= () => {
    // Prepare form data for submitting it.
    var formData = {
      company: this.refs.company.value,
      email_id: this.refs.email.value,
      name: this.refs.name.value,
      phone_number: this.refs.phone.value,
    };
    fetch('http://dev.impactrun.com/api/enquire/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then((res) => {
      if(res.status===200 || res.status ===201){
        this.setState({
          successmessage:'Form Submitted Successfully..!!'
        })
        this.refs.company.value = null;
        this.refs.email.value = null;
        this.refs.name.value = null;
        this.refs.phone.value= null;
      }else {
        this.refs.company.value = null;
        this.refs.email.value = null;
        this.refs.name.value = null;
        this.refs.phone.value= null;

        this.setState({
            successmessage:'Error occured : Please contact us on contact@impactrun.com',
            response: "failure"
        })

      }

    })
    .catch((res) =>{
      this.setState({
        successmessage:'please try again',
        response:"failure"
      })
     })





  }


  render(){
    return(
      <div className="row">
      <div className="col-sm-12">
      <div className="demo-content1">
      <h2>COME PARTNER WITH US</h2>

      <div id="enquire-form" className="form-wrap">
      <form action="" onSubmit={this.handleSubmit}>
      <div className="form-group">
      <label htmlFor="name">Your full name </label>
      <input className="form-control" name="name" ref="name" type="text" />
      </div>
      <div className="form-group">
      <label htmlFor="email">Your email address <span style={{color:"red"}}>*</span></label>
      <input className="form-control" name="email" placeholder="jane.joe@example.com" ref="email" required type="text" pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" title="must be alphanumeric and contains '@' , '.' "  />
      </div>
      <div className="form-group">
      <label htmlFor="company">Your company</label>
      <input className="form-control" name="company" ref="company" type="text" />
      </div>
      <div className="form-group">
      <label htmlFor="phone">Your phone number <span style={{color:"red"}}>*</span></label>
      <input className="form-control" name="phone" ref="phone" placeholder="xxx-xxx-xxxx" required type="tel" pattern="^\d{3}\d{3}\d{4}$" title="must be numeric in 10 digits"/>
      </div>

      <div className="form-group ">
      <button className="btn btn-primary btn-enquire btn btn-lg btn-default" type="submit">PARTNER WITH US</button>
      <div className={this.state.response}><span id="test">{this.state.successmessage}</span></div>
      </div>
      </form> 
      </div>
      </div>
      </div>

      </div>

    );
  }
}
