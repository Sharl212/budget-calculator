import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { registration } from '../.././authorization/registration';

  class Register extends Component {
    render(){
      return(
          <Fragment>
            <form className='signupForm' onSubmit={registration}>
              <div class="alert alert-success col-12" role="alert">registered successfully</div>
              <div class="alert alert-danger col-12" role="alert">Email is taken, choose another one</div>
                  <h1>JOIN US!</h1>
                <div className="dropdown-divider"></div> {/*line divider*/}
              <div className='form-row'>
                <div  className='form-group col-6'>
                  <label htmlFor="UsernameInput">First name</label><br/>
                    <input type="firstname" name='fname' className="form-control" placeholder="Ex: Satoshi" id="firstname" aria-describedby="firstname"required />
                  </div>
                  <div  className='form-group col-6'>
                  <label htmlFor="UsernameInput">Last name</label><brrequired />
                    <input type="lastname" name='lname' className="form-control" id="lastname" placeholder="Ex: Nakamoto" aria-describedby="lastname"required />
                  </div>
                  <div  className='form-group col-12'>
                  <small id="username" className="form-text text-muted">Let us know what to call you.</small>
                  </div>
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" name='email' className="form-control" placeholder="Hacker@example.com" id="exampleInputEmail1" aria-describedby="emailHelp"required />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Create a password</label>
                  <input type="password" name='password' className="form-control" placeholder="*********" id="CreatePassword" autoComplete="off"required />
                  <small id="passwordHelp" className="form-text text-muted">Passwords are encrypted and never stored.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword2">Confirm your password</label>
                  <input type="password" name='password' className="form-control" placeholder="*********" id="ConfirmPassword" autoComplete="off"required />
                </div>
                <div className="form-check logindiv">
                  <NavLink  to='/' className='login-link'>Already a member? Sign in now!</NavLink>
                  {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"required />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
                </div><br/>
                <button type="submit" className="btn btn-success signup-btn">Register</button>
            </form>
        </Fragment>
      )
    }
  }

export {Register};