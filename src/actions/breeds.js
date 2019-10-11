export const SET_BREEDS = 'SET_BREEDS'
// Exports action as variable. It's still not clear to me why this is useful.
export const setBreedsList = (breeds) => ({
    type: SET_BREEDS,
    payload: breeds
  
})
//function is exported as variable setBreedsList with breeds as argument. Type corresponds to the case in the corresponding reducer. Payload is the data that is returned by the corresponding case in the reducer, which in this case, is the data from the api.