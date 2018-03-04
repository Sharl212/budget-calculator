import React, { Component, Fragment } from 'react';
import Request from 'superagent';


// files required
import { logout } from './UserLogout';
import { Userlogin } from '../Components/User accessibility/Userlogin';



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
             <button onClick={logout}>logout</button>    

        ):(
            <Userlogin/>
          )
          }
          </Fragment>
      )
    }
}

export {   Authentication  };