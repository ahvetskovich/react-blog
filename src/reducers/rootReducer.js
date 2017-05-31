import { combineReducers } from 'redux'
import postStream from './postStreamReducer'

// const initialState = {};
//
// export default function initState(state = initialState) {
//   return state;
// }

export default combineReducers({
  postStream
})