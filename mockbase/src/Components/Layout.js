import React, { Component } from 'react';

class Layout extends Component 
{
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
        </div>
      );
    }
}
export default Layout;