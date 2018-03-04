import React, { Component, Fragment } from 'react';
import { registration } from '../.././authorization/registration';

  class Register extends Component {
    render(){
      return(
          <Fragment>
          <form className="form">
          <input type="username" className="username" placeholder='username'/><br/>
          <input type="email" className="email" placeholder='email'/><br/>
          <input type="password" className="password" placeholder='password'/>
          <button type="submit" onClick= {registration} name="button">SUBMIT</button>
        </form>
        </Fragment>
      )
    }
  }

export {Register};