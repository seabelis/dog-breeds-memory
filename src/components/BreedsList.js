import * as React from 'react'
import { Link } from 'react-router-dom'


export default function BreedsList(props) {
    // console.log(props.breeds[0])

  return (<div>
    <h1>All Breeds</h1>
    <p>    There are { props.breeds.length } dog breeds.</p>
    <ul>
        { props.breeds.map((breed) => {
            return <li key={ breed }>
            {<Link to={ `/dog-breeds/${breed}` }>{breed}</Link>}</li>
        })}
    </ul>
  </div>)
}
