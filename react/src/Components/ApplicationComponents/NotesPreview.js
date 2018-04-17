import React, { Component, Fragment } from 'react';
import Request from 'superagent';

// import { DeleteOneNote } from '../../app-features/DeleteOneNote';
// import { searchById } from '../../app-features/SearchById';
import { fetchNotes } from '../../authorization/fetchNotes';
// import { saveOneNote } from '../../app-features/saveOneNote';



class ShowAll extends Component {
    constructor(props){
      super(props);

      this.state = {
          currentNotes: [],
          length:[],
          searchbyid:[],
          isLoggedIn:[]
        }
    }

    componentDidMount(){
        // fetch notes
        fetchNotes().then((res)=>{
          let DataString = Array.from(res.body);
          this.setState((prevState,props)=>{
              return {
                currentNotes: DataString,
                length: res.body.length
            }
          });
        }).catch((err)=> {
          console.log(err);
        })

            // check if user is logged in
          Request.get('/auth').then((user)=>{
            if(user){
                 this.setState(()=>{
                   return {
                    isLoggedIn: true
                   }
                })
            }
          }).catch(()=> {
            this.setState(()=>{
              return {
                  isLoggedIn: false
              }
           })
          });
        }
        render(){
          const count = this.state.length;
          const currentNotes = this.state.currentNotes;
          const isLoggedIn = this.state.isLoggedIn;
          const listItems = currentNotes.map((dynamicData)=>{
          return(
            <Fragment key={dynamicData._id}>
              <div className='jumbotron'>
                <div className='row'>
                <div className='col-12'><h1 className='noteTitle'>{dynamicData.noteTitle}</h1></div>
                  <div className='col-6' >
                    <ul className='list-unstyled'>
                      <li className='items'>items</li>
                      <li className='item'>{dynamicData.firstItem}</li>
                      <li className='item'>{dynamicData.secondItem}</li>
                      <li className='item'>{dynamicData.thirdItem}</li>
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
                {/* <input className='col-6 form-control' id='uniqueid'/> */}
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
