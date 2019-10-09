import { addBreed, ADD_BREED } from '../actions/ADD_BREED';

export default (state = [], action = {}) => {
    switch (action.type) {
        case "ADD_BREED":
          return [...state, { ...action.payload }];
        default:
            return state;
  }
}