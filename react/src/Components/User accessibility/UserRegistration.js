import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { registration } from '../.././authorization/registration';

  class Register extends Component {
    render(){
      return(
          <Fragment>
          <form className="form">
          <input type="email" className="email"/>
          <input type="password" className="password"/>
          <input type="password" className="password"/>
          <button type="submit" onClick= {registration} name="button">SUBMIT</button>
        </form>
        </Fragment>
      )
    }
  }

export {Register};