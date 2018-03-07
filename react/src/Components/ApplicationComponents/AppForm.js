import React, { Component, Fragment } from 'react';
import { calc } from '../.././app-form/calculateMethod';
import { reset } from '../.././app-form/reset-form';
import { saveOneNote } from '../.././app-features/saveOneNote';
import { searchById } from '../.././app-features/SearchById';
import { DeleteOneNote, wipeAll } from '../.././app-features/DeleteOneNote';

  class FormApp extends Component {
    render(){
      return(
       <Fragment>
        <div className="formdiv col-6">
        <form className="ui form" id='form'>
        <div className="field">
          <h4 className="ui horizontal divider header">
            Budget Calculator
          </h4>
            <input  className="input-group-text" type="text" id="id" name='_id' placeholder='NOTE NAME' autoFocus required autoComplete="off"/>
            <select id='currency' className='col-12'>
                  <option value='EGP'>EGP</option>
                  <option value='USD'>USD</option>
              </select>
              <br/><br/>
          <div className="fields">
            <div className="field">
              <input  type='text' name='firstItem' placeholder='item' required autoComplete="off"/>
              <input  type='text' name='secondItem' placeholder='item' required autoComplete="off"/>
              <input  type='text' name='thirdItem'  placeholder='item' required autoComplete="off"/>
            </div>

            <div className="field">
              <input  type='number' name='firstPrice'   onKeyUp={calc} className='price'  placeholder='price'  required autoComplete="off"/>
              <input  type='number' name='secondPrice'  onKeyUp={calc} className='price'  placeholder='price'  required autoComplete="off"/>
              <input  type='number' name='thirdPrice'   onKeyUp={calc} className='price'  placeholder='price'  required autoComplete="off"/>
            </div>
          </div>
          <input  type='number' name='tBudget' id='totalbudget' placeholder="total price" readOnly/>
        </div>

        </form>
        <button id='save-btn' type='submit' onClick={saveOneNote} className="ui teal labeled icon positive button">
            <span>save</span>
            <i className="add icon"></i>
        </button>
        <button id='reset-form' className='ui red button' onClick={reset}>reset</button> <br/>

        <div className="ui icon input">
          <input type="text" id='searchbyid' placeholder="Search..."/>
          <i  id='ShowByID' onClick={searchById} className="circular search link icon"></i>
        </div>

        <div className="ui icon input">
          <input type="text" id="deleteById" placeholder="Delete..."/>
          <i  id='delete' onClick={DeleteOneNote} className="circular trash link icon"></i>
        </div>
        <button id='showAll' className='ui blue button'>my notes</button>
        <button id='showAll' className='ui red button' onClick={wipeAll}>remove all</button>
        </div>
        </Fragment>
      )
    }
  }
  export { FormApp };