import produce from 'immer'

import { Employee, Geo } from '../typedef'
import * as types from './constants'
import { Actions } from './actions'

export type State = {
  geo: {
    countries: Geo
  }
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
  geo: {
    countries: {
      US: "United States of America",
      UK: "United Kingdom",
      DE: "Germany",
      FR: "France",
      NL: "Netherlands",
      PL: "Poland",
      IT: "Italy",
      ES: "Spain"
    }
  },
  employees: {
    chosenCountry: null,
    employees: null,
    displayedEmployees: []
  },
  projects: {},
  offices: {},
  benefits: {},
}

export const reducer = (state: State = initialState, action: Actions): State => {
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
