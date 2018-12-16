import * as actionTypes from '../actions/actionsTypes'

const initialState = {
  tasks: [],
  loading: false
}

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.FETCH_TASKS_START:
      return Object.assign({}, state, {loading: true})

    case actionTypes.FETCH_TASKS_FAILED:
      return Object.assign({}, state, {loading: false})

    case actionTypes.FETCH_TASKS_SUCESS:
      return Object.assign({}, state, {
        loading: false,
        tasks: payload.tasks
      })
    
    case actionTypes.CHANGE_POSITION_START:
      return Object.assign({}, state, {loading: true})

    default:
    return state
  }
}

export default reducer
