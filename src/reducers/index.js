import { combineReducers } from 'redux'
import breeds from './breeds'
import selectedBreed from './selected-breed'



export default combineReducers({
  breeds,
  selectedBreed
})