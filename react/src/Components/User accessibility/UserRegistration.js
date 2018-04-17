/* eslint-disable */

import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import $ from 'jquery';
import { registration } from '../.././authorization/registration';

  class Register extends Component {
    constructor(props){
      super(props);

      this.state = {
        fname: '',
        lname: '',
        email: '',
        password:'',
        confirmPassword :'',
        formErrors:{fname:'',lname:'', email:'', password: '', confirmPassword: ''},
        fnameValid: false,
        lnameValid: false,
        emailValid: false,
        passwordValid: false,
        confirmPasswordValid: false,
        formValid: false
      }
    }

    handleUserInput(event){
      const name = event.target.name,
            value= event.target.value;
            
        
      this.setState({[name]:value}, ()=>{this.validateField(name, value)});
    }

    validateField(name , value){
          let   fnameValid = this.state.fnameValid,
                lnameValid = this.state.lnameValid,
                emailValid = this.state.emailValid,
                passwordValid = this.state.passwordValid,
                confirmPasswordValid = this.state.confirmPassword,
                formErrors   = this.state.formErrors;

          switch(name){
            case 'fname':
                fnameValid = value.length >= 4;
                formErrors.fname = fnameValid ? '' : ' min length is 4 & max is 6 characters';
            break;

            case 'lname':
              lnameValid = value.length >= 4;
              formErrors.lname = lnameValid ? '' : ' min length is 4 & max is 6 characters';
            break;

            case 'email':
              emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
              formErrors.email = emailValid ? '' : ' is invalid';
            break;
            
            case 'password':
              passwordValid = value.length >= 9;
              formErrors.password = passwordValid ? '': ' is too short';
            break;

            case 'confirmPassword':
              confirmPasswordValid =  $('#CreatePassword').val() === $('#ConfirmPassword').val();
              formErrors.confirmPassword = confirmPasswordValid ? '': 'Passwords doesn\'t match';
            break;

            default:
            break;
          }

            this.setState({fnameValid,
                          lnameValid,
                          emailValid,
                          passwordValid,
                          confirmPasswordValid,
                          formErrors
                }, this.validateForm)
    }

    validateForm() {
      this.setState({formValid: this.state.fnameValid && this.state.lnameValid && this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid})
    }

    errorClass(e){
      return(e.length === 0 ? '': ':invalid')
    }

    render(){
      const formErrors = this.state.formErrors;
      return(
          <Fragment>
          <div className='col-12'>
              {
                Object.keys(formErrors).map((name, i) => {
                if(formErrors[name].length > 0){
                  switch(name){
                    case 'fname':
                      return <div className="alert alert-danger col-12" role="alert" key={i}>First name {formErrors[name]}</div>
                    break;

                    case 'lname':
                      return <div className="alert alert-danger col-12" role="alert" key={i}>Last name {formErrors[name]}</div>
                    break;

                    case 'email':
                      return <div className="alert alert-danger col-12" role="alert" key={i}>Provided email {formErrors[name]}</div>
                    break;

                    case 'password':
                      return  <div className="alert alert-danger col-12" role="alert" key={i}>Password {formErrors[name]}</div>
                    break;

                    case 'confirmPassword':
                      return <div className="alert alert-danger col-12" role="alert" key={i}>{formErrors[name]}</div>
                    break;

                    default:
                    break;
                  }
                }
                  // if(formErrors[name].length > 0){
                  //   return (
                  //     <div className="alert alert-danger col-12" role="alert" key={i}>{name} {formErrors[name]}</p>
                  //   )
                  // }
                })
              }
            </div>
            <form className='signupForm' onSubmit={registration}>
              <div className="alert alert-success col-12" role="alert">Registered successfully</div>
              <div className="alert alert-danger register-error col-12" role="alert">Email is taken, choose another one</div>
                  <h1>JOIN US!</h1>
                <div className="dropdown-divider"></div> {/*line divider*/}
              <div className='form-row'>
                <div  className='form-group col-6'>
                  <label htmlFor="UsernameInput">First name</label><br/>
                    <input type="firstname" name='fname' className={`form-control ${this.errorClass(formErrors)}`} onChange={(event)=> this.handleUserInput(event)} placeholder="Ex: Satoshi" id="firstname" aria-describedby="firstname" required />
                  </div>
                  <div  className='form-group col-6'>
                  <label htmlFor="UsernameInput">Last name</label><brrequired />
                    <input type="lastname" name='lname' className={`form-control ${this.errorClass(formErrors)}`} onChange={(event)=> this.handleUserInput(event)}  placeholder="Ex: Nakamoto" id="lastname" aria-describedby="lastname" required />
                  </div>
                  <div  className='form-group col-12'>
                  <small id="username" className="form-text text-muted">Let us know what to call you.</small>
                  </div>
                </div>
                <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" name='email' className={`form-control ${this.errorClass(formErrors)}`} onChange={(event)=> this.handleUserInput(event)} placeholder="Hacker@example.com" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Create a password</label>
                  <input type="password" name='password' className={`form-control ${this.errorClass(formErrors)}`} onChange={(event)=> this.handleUserInput(event)} placeholder="*********" id="CreatePassword" autoComplete="off" required />
                  <small id="passwordHelp" className="form-text text-muted">Passwords are encrypted and never stored.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword2">Confirm your password</label>
                  <input type="password" name='confirmPassword' className={`form-control ${this.errorClass(formErrors)}`} onChange={(event)=> this.handleUserInput(event)} placeholder="*********" id="ConfirmPassword" autoComplete="off" required />
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