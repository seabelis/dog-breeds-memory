import * as React from 'react'
import { Link } from 'react-router-dom'

// contains markup and retrieve data via the props

export default function Game1(props) {
    return (
        <div>
            <h2>Game 1</h2>
            <p>Which breed is shown in the photo?</p>
            <p>
                <Link to="/">Go back to the index.</Link>
            </p>
            <div>
                { props.images && props.images.map(url => <img src={ url } alt={ props.match.params.breed } key={ url }/>) }
            </div>
        </div>

    )
}