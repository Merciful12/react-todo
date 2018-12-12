import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import tasksReducer from './reducers/tasks'
import visibilityFilter from './reducers/visibilityFilter'

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const rootReducer = combineReducers({
  tasks: tasksReducer,
  visibilityFilter
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
