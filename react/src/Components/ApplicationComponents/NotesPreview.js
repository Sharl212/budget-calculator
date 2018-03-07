import React, { Component, Fragment } from 'react';
import Request from 'superagent';
import { DeleteOneNote } from '../../app-features/DeleteOneNote';
// import $ from 'jquery';


class ShowAll extends Component {
    constructor(props){
      super(props);
      this.state = {
        Data: [],
        length:[],
        isLoggedIn:[]
      }
    }

    componentDidMount(){
        // fetch notes
          Request.get('/budget').then((res)=>{
            let DataString = Array.from(res.body);
            this.setState({
              Data: DataString,
              length: res.body.length
            })
          }).catch((err)=> {
            console.log(err);
          })

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
          const count = this.state.length;
          const myNotes = this.state.Data;
          const isLoggedIn = this.state.isLoggedIn;
          const listItems = myNotes.map((dynamicData)=>{
        return(
          
          <Fragment key={dynamicData.id}>
          <div className='jumbotron'>
            <div className='row'>
            <button onClick={DeleteOneNote}>Delete</button>
              <input className='col-12 title form-control' id='deleteById' value={dynamicData._id} readOnly/>
              <div className="dropdown-divider"></div> {/*line divider*/}
                <div className='col-6' >
                  <ul className='list-unstyled'>
                    <li className='items'>items</li>
                    <li >{dynamicData.firstItem}</li>
                    <li >{dynamicData.secondItem}</li>
                    <li >{dynamicData.thirdItem}</li>
                    {/* <li>Total Budget :</li> */}
                  </ul>
                </div>
    
                <div className='dynamicData col-6'>
                  <ul className ='list-unstyled'>
                    <li className='prices'>Prices</li>
                    <li>{dynamicData.firstPrice} {dynamicData.currency}</li>
                    <li>{dynamicData.secondPrice} {dynamicData.currency}</li>
                    <li>{dynamicData.thirdPrice} {dynamicData.currency}</li>
                  </ul>
                </div>
                  </div>
                  <h3 className='col-12 totalprice'>{dynamicData.tBudget} {dynamicData.currency}</h3>
                </div>
          </Fragment>
          )
      })
        return (
          <Fragment>
              {isLoggedIn ===true?(
                <div className='myNotesList '>
                number of notes :  {count}
                {listItems}
                </div>
            ):(
              <Fragment>
                </Fragment>
            )
              }
          </Fragment>
          )
      }
  }   
  export { ShowAll };