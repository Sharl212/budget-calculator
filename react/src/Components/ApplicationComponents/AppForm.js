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
        <div className="formdiv">
        <form className="" id='form'>
          <div  className='form-group col-12'>
            {/* <label className='title col-12'>Budget Calculator</label> */}
            <div className='row'>
              <input type="text" className="form-control col-12" id="id" name='_id' placeholder='NOTE NAME' aria-describedby="firstname" autoFocus required autoComplete="off"/>
              </div>
              <select id='currency' className='col-12'>
                  <option value='EGP'>EGP</option>
                  <option value='USD'>USD</option>
              </select>
            </div><br/>
            <div className="dropdown-divider"></div> {/*line divider*/}
          <div className='row'>
            <label className='items-title col-6'>items</label>
            <label className='price-title col-6'>prices</label>
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <input type="text"  name='firstItem'  className="form-control"  placeholder='Ex: food..' required autoComplete="off"/>
              <input type="text"  name='secondItem' className="form-control"  placeholder='Ex: more food..' required autoComplete="off"/>
              <input type="text"  name='thirdItem'  className="form-control"  placeholder='Ex: even more food..' required autoComplete="off"/>
            </div>
            <div className="form-group col-6">
              <input type="number"  name='firstPrice'   className="form-control price"   placeholder='Ex: 10 USD..' onKeyUp={calc}   required autoComplete="off"/>
              <input type="number"  name='secondPrice'  className="form-control price"   placeholder='Ex: 20 USD..' onKeyUp={calc}   required autoComplete="off"/>
              <input type="number"  name='thirdPrice'   className="form-control price"   placeholder='Ex: 40 USD..' onKeyUp={calc}   required autoComplete="off"/>
            </div>
          </div>
          <input  type='number' name='tBudget' className="form-control"id='totalbudget' placeholder="total price" readOnly/>
        </form>
        <div className='row'>
          <div className="form-group col-12">
              <button id='reset-form' className='btn btn-danger' onClick={reset}>reset</button>
            </div>
          <div className="form-group col-12">
              <button id='save-btn' onClick={saveOneNote} className="btn btn-success">save</button>
            </div>
        </div>
          </div>
        </Fragment>
      )
    }
  }
  export { FormApp };