import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { login } from '../.././authorization/Userlogin';
import '../../css/form.css';
// import {auth} from '../../index';

class Userlogin extends Component{ // generate user token { login }

  constructor(props){
    super(props);

    this.state = {
      email:'',
      password:'',
      formErrors:{email:'', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 9;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);

  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},()=>{this.validateField(name, value)});
  }
  
  errorClass (e){
    return(e.length === 0 ? '': ':invalid')
  }

  render(){
    let formErrors = this.state.formErrors;
      return(
        <Fragment>
          
          <div className='col-12'>
            <div className="alert alert-success authenticated col-12" role="alert">
                Logged in successfully!
              </div>
              <div className="alert alert-danger unauthenticated col-12" role="alert">
                Email or password is incorrect
              </div>
            {Object.keys(formErrors).map((fieldName, i) => {
              if(formErrors[fieldName].length > 0){
                return (
                  // console.log(fieldName,formErrors,fieldName);
                  <div className="alert alert-danger col-12" role="alert" key={i}>
                    {fieldName} {formErrors[fieldName]}
                  </div>
                )        
              } else {
                return '';
              }
            })}
          </div>
          
      <div className='loginForm'>
        <form onSubmit={login}>
          <div className="form-group was-validated">
            <h1>Welcome Back!</h1>
          <div className="dropdown-divider"></div> {/*line divider*/}
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" name='email' className={`form-control ${this.errorClass(formErrors)}`} value={this.state.email} onChange={(event) => this.handleUserInput(event)} placeholder="hacker@example.com" id="exampleInputEmail1" required/>
          </div>
          <div className="form-group was-validated">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name='password' className={`form-control ${this.errorClass(formErrors)}`} onChange={(event) => this.handleUserInput(event)} placeholder="*********" id="exampleInputPassword1" required/>
          </div>
          <div className="form-check ">
            <NavLink  to='/registration' className='signup-link'>New here? Sign up now!</NavLink>
            {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
          </div><br/>
          <button type="submit" className="btn btn-primary login-btn">Login</button>
        </form>
        {/* <button type="button" onClick= {auth.login} className="btn btn-primary login-btn">Login</button>         */}
      </div>
       </Fragment>
      );
    }
  }

export { Userlogin };