import { createStore } from 'redux'
import produce from 'immer'

import { Employee } from '../typedef'
import * as types from './constants'
import { Actions } from './actions'


type State = {
  employees: {
    chosenCountry: string | null
    employees: Employee[] | null
    displayedEmployees: number[]
  }
  projects: {}
  offices: {}
  benefits: {}
}

const initialState: State = {
  employees: {
    chosenCountry: null,
    employees: null,
    displayedEmployees: []
  },
  projects: {},
  offices: {},
  benefits: {},
}

const reducer = (state: State = initialState, action: Actions): State => {
  
  switch(action.type){
    case types.CHOOSE_COUNTRY:

      return produce(state, (draft) => {
        draft.employees.chosenCountry = action.country
      })
      // return {
      //   ...state,
      //   employees: {
      //     ...state.employees,
      //     chosenCountry: action.country
      //   }
      // }
      
    case types.DISPLAY_EMPLOYEE:
        return {
          ...state,
          employees: {
            ...state.employees,
            displayedEmployees: [action.id, ...state.employees.displayedEmployees]
          }
        }

    default:
      return state
  }
}

export const store = createStore(reducer)
export const getStore = () => {
  return createStore(reducer)
}

// component to consume Redux
/*

DumbComponent

import { connect } from 'react-redux'

export const ConnectedComponent = connect(
  (state: State) => ({
    myLocalProp: state.employees.chosenCountry
  }), // READ data from store
  // mapDispatchToProps, // WRITE ACTIONS TO STORE
  (dispatch) => ({
    onSelected: (country: string) => dispatch( chooseCountry(country) )
  })
)(DumbComponent)
*/
