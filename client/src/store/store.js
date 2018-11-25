import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import tasksReducer from './reducers/tasks'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const rootReducer = combineReducers({
  tasks: tasksReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
