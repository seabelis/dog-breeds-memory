import {  SELECT_BREED } from '../actions/selectBreed';

const reducer = (state = [], action = {}) => {
    switch (action.type) {
    case SELECT_BREED:
      return action.payload
    default:
      return state
    }
  }
  
  export default reducer