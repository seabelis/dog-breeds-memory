import * as React from 'react'

export default function BreedsList(props) {
  return (<div>
    <h1>All Breeds</h1>
    <p>    There are { props.breeds.length } dog breeds.</p>
    <ul>
        { props.breeds.map((breed) => {
            return <li key={ breed }>{ breed } </li>
        })}
    </ul>
  </div>)
}