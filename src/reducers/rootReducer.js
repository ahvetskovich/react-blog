import { combineReducers } from 'redux'
import postStream from './postStreamReducer'
import postPage from './postPageReducer'

export default combineReducers({
  postStream,
  postPage
})