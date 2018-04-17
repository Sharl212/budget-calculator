/*eslint no-restricted-globals: 0 */

import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Request from 'superagent';
// import $ from 'jquery';

// App Core
import { Navbar, Navbarlogin, Navbarsignup, NavbarApp } from './Components/AppCore/Navbar';
import { NotFoundPage } from './Components/AppCore/NotFoundPage';

// application Components
import { ShowAll } from './Components/ApplicationComponents/NotesPreview';
import { FormApp } from './Components/ApplicationComponents/AppForm';

// User Accessibility Components
import { Register } from './Components/User accessibility/UserRegistration';
import { Userlogin } from './Components/User accessibility/Userlogin';


// styling
import './css/App.css';  // main css file
import './css/navbar.css';  // main css file
import './css/notes.css';  // myNotesList
// import './css/form.css';
// import './libs/semantic/dist/semantic.min.css'; // semantic library for styles.



  class Username extends Component{ // fetch Users name 
    constructor(props){
      super(props);
      this.state={
        firstname:[],
        lastname:[],
        isLoggedIn: ''
      }
    }

    componentDidMount(){
      // fetch user {username}
      Request.get('/user').then((Data)=>{
        this.setState({
          firstname: Data.body.firstname,
          lastname: Data.body.lastname
        })
      }).catch((err)=>{
        console.log(err);
      });

      const CheckisLoggedIn = () =>{
        Request.get('/auth').then((user)=>{
          if(user){
              this.setState({isLoggedIn: 'true'});
          }
          console.log(user);
        }).catch((err)=> {
            this.setState({isLoggedIn: 'false'});
            console.log(err);
        })
      }
      CheckisLoggedIn();
    }

    render(){
      const firstname  = this.state.firstname;
      const lastname   = this.state.lastname;
      const isLoggedIn = this.state.isLoggedIn;

     return(
        <Fragment>
        { isLoggedIn === 'true'?(
          <Fragment>
                {firstname} {lastname}
          </Fragment>
        ):(
          <Fragment>
            </Fragment>
        )
        }
        </Fragment>
      )
    }
  }


class About extends Component{
  render(){
    return(
      <Fragment>
        <div className='container aboutparagraph'>
          <label className='title col-12'>Budget Calculator</label>
          <div className="dropdown-divider"></div> {/*line divider*/}
          <p>An open source web application that helps you manage your budget.</p>
          <p> Isn't it boring to use a regular notepad then statically add your items , prices?</p>
          <p>Well , we offer better experience with a real database to store your budgets.</p>
        </div>
        </Fragment>
    )
  }
}
  class AppStructure extends Component{    
    render(){
      return(
        <Fragment>
          <div className='container'>
            <div className='row'>
                <FormApp/>
                <ShowAll/>
              </div>
          </div>
          </Fragment>
      )
    }
  }

  // App Routing
 class App extends Component {
   constructor(){
     super();

     this.state = {
       isLoggedIn: ''
     }
   }
   
   componentDidMount(){
    const CheckisLoggedIn = () =>{
      Request.get('/auth').then((user)=>{
        if(user){
            this.setState({isLoggedIn: 'true'});
        }
        console.log(user);
      }).catch((err)=> {
          this.setState({isLoggedIn: 'false'});
          console.log(err);
      })
    }
    CheckisLoggedIn();
   }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    
    const PrivateRoute = () => (
      <Route
        render = {() =>
          isLoggedIn === 'false'? ( // if the user is not logged in , the application page is restricted
            <Redirect
            to={{
              pathname: '/',
              state: { from: location.pathname.replace(/^\/?|\/$/g,'') }
            }}
          />
          ):(
            <Fragment><NavbarApp/><AppStructure/></Fragment> // application page
          )
        }
      />
    );
  
    const LoginRoute = ()=>(
        <Route
          render = {() =>
            isLoggedIn === 'true' ? ( // if the user is logged in , the login page is restricted.
                <Redirect
                to={{
                  pathname: "/app",
                  state: { from: location.pathname.replace(/^\/?|\/$/g,"") }
                }}
              />
          ):(
            <Fragment><Navbarlogin /><div className='container'><div className='row'><Userlogin /></div></div></Fragment>
            )
        }
      />
    );
  
    const RegisterRoute = () =>(
        <Route
        render = {props =>
          isLoggedIn === 'true'? ( // if the user is logged in , the register page is restricted, redirected to the app page
              <Redirect
              to={{
                pathname: "/app",
                state: { from: location.pathname.replace(/^\/?|\/$/g,"") }
              }}
            /> 
        ): (
          <Fragment><Navbarsignup /><Register /></Fragment>
        )
      }
    />
    )
    
    return (
        <BrowserRouter>
          <Fragment>
          <Switch>
            <LoginRoute path='/' exact={true}/>
            <RegisterRoute path='/registration' exact={true}/>
            <PrivateRoute path='/app' exact={true}/>
            <Route path='/about' render={() => <Fragment><Navbar/><About/></Fragment>}/>
            <Route path='/callback' render={() => <Fragment><h1>loading..</h1></Fragment>}/>
            <Route component={NotFoundPage}/>
          </Switch>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
export {Username};
