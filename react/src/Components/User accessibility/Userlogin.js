import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { login } from '../.././authorization/Userlogin';

  class Userlogin extends Component{ // generate user token {login}
  render(){
    return(
    <form className="form">
      <input type="email" name="email"/>
      <input type="password" name="password"/>
      <button type="submit" onClick={login} name="button">GOO</button><br/>
      <NavLink to='/registration' activeClassName='is-active' exact={true}>new here? sign up now!</NavLink>
    </form>
    );
  }
}

export { Userlogin };