import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { login } from '../.././authorization/Userlogin';
import '../../css/form.css';

class Userlogin extends Component{ // generate user token { login }
  
  render(){
      return(
        <Fragment>
      <div className='loginForm'>
        <div className="alert alert-success" role="alert">
            logged in successfully!
            </div>
          <div className="alert alert-danger" role="alert">
            username or password is wrong.
          </div>
        <form>
          <div className="form-group">
            <h1>Welcome Back!</h1>
          <div className="dropdown-divider"></div> {/*line divider*/}
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" name='email' className="form-control" placeholder="hacker@example.com" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name='password' className="form-control" placeholder="*********" id="exampleInputPassword1"/>
          </div>
          <div className="form-check ">
            <NavLink  to='/registration' className='signup-link'>New here? Sign up now!</NavLink>
            {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
          </div><br/>
          <button type="submit" className="btn btn-primary login-btn" onClick={login}>Login</button>
        </form>
      </div>
       </Fragment>
      );
    }
  }

export { Userlogin };