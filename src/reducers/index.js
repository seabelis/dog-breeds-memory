import { combineReducers } from 'redux'
import breeds from './breeds'
import selectedBreed from './selected-breed'

// index of all reducers

export default combineReducers({
  breeds,
  selectedBreed
})