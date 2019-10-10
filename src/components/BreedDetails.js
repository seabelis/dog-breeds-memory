import * as React from 'react'
import { Link } from 'react-router-dom'


export default function BreedDetails(props) {
  const breed = props.breed
  return (<div>
    <h2>{ props.match.params.breed }</h2>
    This page will show images of the { props.match.params.breed } breed.

    <Link to="/">Go back to the index</Link>
    <div>
      { props.images && props.images.map(url => <img src={ url } alt="Dog" key={ url }/>) }
      { !props.images && 'Loading...' }
    </div>
  </div>)

      
}