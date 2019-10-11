import * as React from 'react'
import { Link } from 'react-router-dom'

// contains markup and retrieve data via the props
export default function BreedsList(props) {
    // console.log(props.breeds[0])

  return (<div>
    <p><Link to={ `/games` }>Take me to the games!</Link></p>
    <h2>All Breeds</h2>
    <p>There are { props.breeds.length } dog breeds.</p>
    { props.breeds.map((breed) => {
      return <div key={ breed }>
      {<Link to={ `/breed/${breed}` }>{breed}</Link>}</div>
    })}

  </div>)
}
//games is the path assigned to the GamesContainer and is displayed when user clicks the link.
//breed/${breed} is the path assigned to the BreedDetailsContainer and is displayed when user clicks the link. The type of breed is specified by ${breed} which is passed from the name of the specific breed clicked. 