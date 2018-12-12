import * as actionTypes from '../actions/actionsTypes'

export const setVisibilityFilter = filter => ({
  type: actionTypes.SET_VISIBILITY_FILTER,
  payload : {
    filter
  }
})
