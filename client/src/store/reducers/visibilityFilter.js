import { SHOW_ALL, SET_VISIBILITY_FILTER } from '../actions/actionsTypes'

const initialState = {
  filter: SHOW_ALL
}

const visibilityFilter = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {filter: payload.filter})
    default:
      return state
  }
}

export default visibilityFilter