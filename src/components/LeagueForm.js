import React from 'react';
import { Form,FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap/lib/';


export default class LeagueForm extends React.Component{
  state = { item: {} };

  handleSubmit= (event) => {
    event.preventDefault();
    // Scroll to the top of the page to show the status message.
    document.getElementById('heading').scrollIntoView();
    this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
  }

  render(){
    return(
      <div className ="row">
          <div className="col-sm-12">
              <div className="demo-content1">
                  <h3>COME PARTNER WITH US</h3>

                  <div id="enquire-form" className="form-wrap">
        <form action="" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your full name *</label>
            <input className="form-control" name="name" ref="name" required type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email address *</label>
            <input className="form-control" name="email" ref="email" required type="email" />
          </div>
          <div className="form-group">
            <label htmlFor="company">Your company *</label>
            <input className="form-control" name="company" ref="company" required type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Your phone number *</label>
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
