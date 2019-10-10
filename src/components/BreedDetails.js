import React from 'react'
import { Link } from 'react-router-dom'


export default function BreedDetails(props) {
  const breed = props.breed
  return (<div>
    <h2>{ breed }</h2>
    This page will show images of a specific dog breed.

    <ul>
      {/* { breed.map(breed =>
        <li key={ breed }>{ breed }</li>
      ) } */}
    </ul>
    <Link to="/">Go back to the index</Link>
  </div>)
}