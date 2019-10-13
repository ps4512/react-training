import { connect } from 'react-redux'

import { State } from '../../store/reducer'
import { chooseCountry } from '../../store/actions'
import { Dropdown } from '../Dropdown'

export const CountryDropdown = connect(
  // mapStateToProps // READ DATA FROM STORE
  (state: State) => ({
    items: state.geo.countries
  }),

  // mapDispatchToProps, // WRITE ACTIONS TO STORE
  (dispatch) => ({
    onChanged: (country: string) => dispatch( chooseCountry(country) )
  })
)(Dropdown)
