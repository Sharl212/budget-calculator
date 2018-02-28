import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { login } from '../.././authorization/Userlogin';

  class Userlogin extends Component{ // generate user token {login}
  render(){
    return(
    <form className="form">
      <input type="email" name="email"/>
      <input type="password" name="password"/>
      <button type="submit" onClick={login} name="button">GOO</button>
      <div className="ui success message">
          <div className="header">
              <p className='successMesg'>logged in successfully!</p>
          </div>
      </div>
      <div className="ui negative message">
        <div className="header">
          <p className='errorMesg'>email or password is incorrect </p>
        </div>
      </div>
    </form>
    );
  }
}

export { Userlogin };