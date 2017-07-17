import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import LeaguePage from './components/leaguePage';
import Example from './components/CountDownWidget';
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

 var path = "/impactleague/"


//
// var Get_URL;
// fetch("http://dev.impactrun.com/impactleague/Aarti-Impact-League/")
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }
//       // Examine the text in the response
//       response.json()
//       .then(function(data) {
//         console.log("DATA RETURNED",data.results[0]);
//         Get_URL = data.results[0].impactleague_name;
//         console.log("URL IS ",Get_URL);
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });



ReactDOM.render(

  <Router>
  <div id="test">
  <Route exact path="/" component={App}/>
  <Route path={path} render={routeProps => <LeaguePage {...routeProps} path={path}/>} history={history}/>
    <Route path="/description" render={routeProps => <Example {...routeProps} />} history={history}/>
  </div>
  </Router>,
  document.getElementById('root')
);
