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


function isLoggedIn(){
  Request.get('/auth').then((user)=>{
    if(user){
        return true;
    }
    console.log(user);
  }).catch((err)=> {
        return false;
  })
}

  class Username extends Component{ // fetch Users name 
    constructor(props){
      super(props);
      this.state={
        firstname:[],
        lastname:[]
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
    }

    render(){
      const firstname = this.state.firstname;
      const lastname = this.state.lastname;

      return(
        <Fragment>
        {isLoggedIn = true?(
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


  const PrivateRoute = () => (
    <Route
      render = {props =>
        isLoggedIn = false? (
          <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
        ):(
          <Fragment> <NavbarApp/><AppStructure/></Fragment>
        )
      }
    />
  );

  const LoginRoute = ()=>(
      <Route
      render = {props =>
        isLoggedIn = false? (
            <Redirect
            to={{
              pathname: "/app",
              state: { from: props.location }
            }}
          /> 
      ): (
        <Fragment><Navbarlogin /><Userlogin /></Fragment>
        )
      }
    />
  );

  // App Routing
 class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Fragment>
          <Switch>
            <LoginRoute path='/'  exact={true}/>
            <Route path='/registration' render={props =><Fragment><Navbarsignup /><Register /></Fragment>}/>
            <PrivateRoute path='/app'   render={props =><Fragment><NavbarApp /><AppStructure/></Fragment>} exact={true}/>
            <Route path='/about' render={props => <Fragment><Navbar/><About/></Fragment>}/>
            <Route component={NotFoundPage}/>
          </Switch>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
export {Username};