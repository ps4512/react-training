import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer } from './reducer'

export const getStore = () => {
  return createStore(reducer, composeWithDevTools())
}

export const store = getStore()
