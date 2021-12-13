import { combineReducers } from 'redux'
import usersReducer from './users-reducer'
import alertReducer from './alert-reducer'

export default combineReducers({
  users: usersReducer,
  alert: alertReducer
})

// If we are going to have several reducers, we must use combine them because there can only be one
