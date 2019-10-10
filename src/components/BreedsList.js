import * as React from 'react'
import { Link } from 'react-router-dom'


export default function BreedsList(props) {
    // console.log(props.breeds[0])

  return (<div>
    <p><Link to={ `/games` }>Take me to the games!</Link></p>
    <h2>All Breeds</h2>
    <p>There are { props.breeds.length } dog breeds.</p>
    { props.breeds.map((breed) => {
      return <p key={ breed }>
      {<Link to={ `/dog-breed/${breed}` }>{breed}</Link>}</p>
    })}

  </div>)
}
