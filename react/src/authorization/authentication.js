import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import Request from 'superagent';


// files required
import { logout } from './UserLogout';
// import { Userlogin } from '../Components/User accessibility/Userlogin';
import { Username } from '../App';
import photo from './man-1.png';


class Authentication extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:[]
        }
    }
    
    componentDidMount(){
        Request.get('/auth').then((user)=>{
            if(user){
                this.setState({
                    isLoggedIn: true
                })
            }
        }).catch((err)=> {
            this.setState({
                isLoggedIn: false
            })
        });
    }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
      return(
          <Fragment>
          {isLoggedIn ===true?(
              <Fragment>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item navbar-nav">
                        <img src={photo}/>
                        <NavLink className="username" to="/app"><Username/></NavLink>
                    </li>
                  </ul>
                <div className='nav-item navbar-nav active'>
                    <NavLink className="nav-link settings" to="/settings">Settings</NavLink>
                    
                    <NavLink className="nav-link about" to="/about">About</NavLink>

                    <a className="nav-link github-link" target='_blank' rel="noopener noreferrer" href="https://github.com/Sharl212/budget-calculator/tree/production-build" alt="github link">
                        <i className="fab fa-github"></i>
                        Github
                    </a>
                </div>                
            <button className='btn btn-warning logout-btn' onClick={logout}>logout</button>
             </Fragment>
        ):(
            <Fragment>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/'>Login</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className="nav-link" to="/registration">Sign Up</NavLink>
                </li>
            </ul>
            <div className='nav-item navbar-nav'>
                <NavLink className="nav-link" to="/about">About</NavLink>
            </div>
            <a className="nav-link github-link" target='_blank' rel="noopener noreferrer" href="https://github.com/Sharl212/budget-calculator/tree/production-build">
                <i className="fab fa-github"></i>
                Github
             </a>
            </Fragment>
          )
          }
          </Fragment>
      )
    }
}

export {   Authentication  };