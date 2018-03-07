import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Authentication } from '../../authorization/authentication';
import { Username } from '../../App';


class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse Navbarsignup" id="navbarSupportedContent">
          <Authentication/>
      </div>
      </nav>
    )
  }
}

class Navbarsignup extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse Navbarsignup" id="navbarSupportedContent">
          <Authentication/>
      </div>
      </nav>
    )
  }
}

  class Navbarlogin extends Component{
    render(){
      return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse Navbarlogin" id="navbarSupportedContent">
            <Authentication/>
        </div>
        </nav>
      )
    }
  }
  export {Navbarlogin}
  export {Navbarsignup}
  export {Navbar};
