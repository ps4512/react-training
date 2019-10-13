import { getStore } from './index'
import { chooseCountry } from './actions'

describe('Redux Store', () => {
  it('should correctly update after CHOOSE_COUNTRY action dispatched', () => {
    // given
    const store = getStore()
    const initialState = store.getState()

    // when
    store.dispatch( chooseCountry('UK') )

    // then
    expect(store.getState()).toEqual({
      "geo": {
        "countries": {
          "US": "United States of America",
          "UK": "United Kingdom",
          "DE": "Germany",
          "FR": "France",
          "NL": "Netherlands",
          "PL": "Poland",
          "IT": "Italy",
          "ES": "Spain"
        }
      },
      "benefits": {},
      "employees": {
        "chosenCountry": "UK",
        "displayedEmployees": [],
        "employees": null,
      },
      "offices": {},
      "projects": {},
    })
    // no mutation check
    expect(store.getState()).not.toBe(initialState)
  });
});
