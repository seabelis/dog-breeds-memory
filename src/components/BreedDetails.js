import React from 'react'

export default function BreedDetails(props) {
  const breed = props.breed
  return (<div>
    <h2>{ breed.name }</h2>

    <ul>
      { breed.ingredients.map(ingredient =>
        <li key={ingredient}>{ ingredient }</li>
      ) }
    </ul>
  </div>)
}