import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Request from 'superagent';
// import $ from 'jquery';

// App Core
import { Navbar, Navbarlogin, Navbarsignup } from './Components/AppCore/Navbar';
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
import './libs/semantic/dist/semantic.min.css'; // semantic library for styles.


  class Username extends Component{ // fetch Users name 
    constructor(props){
      super(props);
      this.state={
        username:[],
        isLoggedIn:[]
      }
    }

    componentDidMount(){
      // fetch user {username}
      Request.get('/user').then((Data)=>{
        this.setState({
          username: Data.body.Username
        })
      }).catch((err)=>{
        console.log(err);
      });

      // check if user is logged in
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
      const username = this.state.username;
      const isLoggedIn = this.state.isLoggedIn;

      return(
        <Fragment>
        {isLoggedIn === true?(
          <Fragment>
                {username}
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
        <p> hello ,world!</p>
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
  render() {
    return (
        <BrowserRouter>
          <Fragment>
          <Switch>
            <Route path='/' render={props =><Fragment><Navbarlogin /><Userlogin /></Fragment>} exact={true}/>
            <Route path='/app' component={AppStructure}/>
            <Route path='/registration' render={props =><Fragment><Navbarsignup /><Register /></Fragment>}/>
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