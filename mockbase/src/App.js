import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="App-header">
          <img src="images/logo.png" className="img-responsive center-block" id="logo" />
        </div>
          <div className="App-input form-group">
            <input type="login" className="form-control input-underline input-lg" placeholder="Email" /> 
          </div>
          <div className="App-input form-group">
            <input type="password" className="form-control input-underline input-lg" placeholder="Password" /> 
          </div>
          {/* <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div> */}
      </div>
    );
  }
}
export default App;