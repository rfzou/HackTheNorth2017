import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="App-header">
          <h2>Login to mockbase</h2>
        </div>
          <div className="App-input">
            <input type="login" className="form-control input-underline input-lg" placeholder="Login" /> 
          </div>
          <div className="App-input">
            <input type="password" className="form-control input-underline input-lg" placeholder="Password" /> 
          </div>
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
      </div>
    );
  }
}
export default App;