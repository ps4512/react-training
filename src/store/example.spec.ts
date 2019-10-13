import { getStore } from './index'
import { chooseCountry } from './actions'

describe('Redux Store', () => {
  it('', () => {
    // given
    const store = getStore()
    const initialState = store.getState()

    // when
    store.dispatch( chooseCountry('UK') )

    // then
    expect(store.getState()).toEqual({
      
    })
    // no mutation check
    expect(store.getState()).not.toBe(initialState)
  });
});
