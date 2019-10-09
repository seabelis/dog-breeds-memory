export const ADD_BREED = 'ADD_BREED'

export function addBreed(breed) {
  return {
    type: 'ADD_BREED',
    payload: {
      breed,
    }
  }
}