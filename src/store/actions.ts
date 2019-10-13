import * as types from './constants'

// const actionType = <T>(type: T) => type

// action creator

export const displayEmployee = (id: number) => ({
  type: types.DISPLAY_EMPLOYEE as typeof types.DISPLAY_EMPLOYEE,
  id
})

export const chooseCountry = (country: string) => ({
  type: types.CHOOSE_COUNTRY as typeof types.CHOOSE_COUNTRY,
  country
})

export type Actions =
  | ReturnType<typeof displayEmployee>
  | ReturnType<typeof chooseCountry>
