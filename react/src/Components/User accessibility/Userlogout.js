import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { logout } from '../.././authorization/UserLogout';

  class Userlogout extends Component{ // destory the user token {logout}
  render(){
    return (
      <Fragment>
           <button onClick={logout}> LOGOUT</button>
     </Fragment>
    )
  }
}

export {Userlogout};