import React from 'react'
import { connect } from 'react-redux'
import Game1 from './Game1'

class GamesContainer extends React.Component {
    render() {
        return <Game1 />
    }

}

export default connect()(GamesContainer)
