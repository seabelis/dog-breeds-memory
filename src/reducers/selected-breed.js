import {  SELECT_BREED } from '../actions/selectBreed';

const reducer = (state = null, action = {}) => {
    switch (action.type) {
    case SELECT_BREED:
      return action.payload
    default:
      return state
    }
  }
  
  export default reducer