import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

// App Core
import { Navbar } from './Components/AppCore/Navbar';

// application Components
import { ShowAll } from './Components/ApplicationComponents/NotesPreview';
import { FormApp } from './Components/ApplicationComponents/AppForm';

// User Accessibility Components
import { Register } from './Components/User accessibility/UserRegistration';
import { Userlogin } from './Components/User accessibility/Userlogin';


import './css/App.css';  // main css file
import './css/notes.css';  // myNotesList
import './libs/semantic/dist/semantic.min.css'; // semantic library for styles.




  class NoteFoundPage extends Component{
    render(){
      return(
        <Fragment>
        404! - <Link to='/app'> go home!</Link>
          </Fragment>
      )
    }
  }
  class Header extends Component{
    render(){
      return(
        <Fragment>
          <NavLink to='/' activeClassName='is-active' exact={true}>login</NavLink>
          <NavLink to='/register' activeClassName='is-active'>register</NavLink>
          <NavLink to='/app' activeClassName='is-active'>App</NavLink>
          </Fragment>
      )
    }
  }

  class MyApp extends Component{
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
  
 class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navbar/>
          <Header/>
          <Switch>
            <Route path='/' component={Userlogin} exact={true}/>
            <Route path='/app' component={MyApp} />
            <Route path='/register' component={Register}/>
            <Route component={NoteFoundPage}/>
          </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;