import React from 'react';
import { Form,FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap/lib/';
import {ReactDOM} from 'react-dom';

export default class LeagueForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      type: 'info',
     message: ''
    }

  }

  handleSubmit= (event) => {
    event.preventDefault();
    // Scroll to the top of the page to show the status message.

    this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
  }

  /**
   * Submits form data to the web server.
   */
  sendFormData= () => {
    // Prepare form data for submitting it.
    var formData = {
      company: this.refs.company.value,
      email: this.refs.email.value,
      name: this.refs.name.value,
      phone: this.refs.phone.value,
    };
    console.log(formData);
    fetch('http://dev.impactrun.com/api/enquire/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  })


  }


  render(){
    return(
      <div className ="row">
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
                            <label htmlFor="email">Your email address</label>
                            <input className="form-control" name="email" ref="email" required type="email" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="company">Your company *</label>
                            <input className="form-control" name="company" ref="company" type="text" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="phone">Your phone number <span>*</span></label>
                            <input className="form-control" name="phone" ref="phone" required type="phone" />
                          </div>


                          <div className="form-group">
                            <button className="btn btn-primary" type="submit">PARTNER WITH US</button>
                          </div>
                        </form>
                  </div>
              </div>
          </div>

      </div>

    );
  }
}
