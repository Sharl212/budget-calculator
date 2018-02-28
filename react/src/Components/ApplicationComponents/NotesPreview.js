import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Request from 'superagent';


class ShowAll extends Component {
    constructor(props){
      super(props);
      this.state = {
        Data: [],
      }
    }

    componentDidMount(){
          Request.get('/budget').then((res)=>{
            let DataString = Array.from(res.body);
            this.setState({
              Data: DataString
            })
          }).catch((err)=> console.log(err));
    }

    render(){
        const myNotes = this.state.Data;
        const listItems = myNotes.map((dynamicData)=>{
          return(
            <Fragment>
            <div className=' col-6'>
            <ul className ='list-unstyled ' key={dynamicData._id}>
            <li>Title:</li>
            <li>{dynamicData.firstItem}</li>
            <li>Price 1: </li>
            <li>{dynamicData.secondItem}</li>
            <li>Price 2:</li>
            <li>{dynamicData.thirdItem}</li>
            <li>Price 3:</li>
            <li>Total Budget :</li>
          </ul>
          </div>
            <div className='dynamicData col-3'>
            <ul className ='list-unstyled ' key={dynamicData._id}>
            <li></li>
            <li> {dynamicData.firstPrice}</li>
            <li></li>
            <li>{dynamicData.secondPrice}</li>
            <li></li>
            <li>{dynamicData.thirdPrice}</li>
            <li>{dynamicData.tBudget}</li>
          </ul>
        </div>
        </Fragment>
        )
    })
  
      return (
         <div className=' col-6 myNotesList '>
            <div className='row'>
          {listItems}
         </div>
         </div>
        )
    }
  }

  export { ShowAll };