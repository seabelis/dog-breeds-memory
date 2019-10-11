import * as React from 'react'
import { Link } from 'react-router-dom'

// contains markup and retrieve data via the props

export default function BreedDetails(props) {
  // const breed = props.breed
  return (<div>
    <h2>{ props.match.params.breed }</h2>
    <Link to="/">Go back to the index</Link>
    <div>
      { props.images && props.images.map(url => <img src={ url } alt={ props.match.params.breed } key={ url }/>) }
      { !props.images && 'Loading...' }
    </div>
  </div>)

      
}