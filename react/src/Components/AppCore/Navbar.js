import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Authentication } from '../../authorization/PrivateRoute(auth)';
import { Username } from '../../App';


class Navbar extends Component{
    render(){
      return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <NavLink to='/app' activeClassName='is-active' className="nav-link" exact={true}>Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" >Action</a>
                  <a className="dropdown-item" >Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" >Something else here</a>
                </div>
              </li>
            </ul>
            <Username/>
            <Authentication/>
          </div>
        </nav>
      )
    }
  }


  export {Navbar};
