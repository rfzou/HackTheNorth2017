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
          <div className="form-group">
            <input type="login" className="form-control input-underline input-lg" placeholder="Email" /> 
          </div>
          <div className="form-group">
            <input type="password" className="form-control input-underline input-lg" placeholder="Password" /> 
          </div>
          <label className="form-check-label">
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </label>
      </div>
    );
  }
}
export default App;