import React from 'react'
import { connect } from 'react-redux'
import Game1 from './Game1'
import request from 'superagent'
import { setBreedsList } from '../actions/breeds'


  // Retrieves the data from the API.

class GamesContainer extends React.Component {
    componentDidMount() {
         request
           .get(`https://dog.ceo/api/breeds/image/random/3`) 
           // I am setting this up for game 1 where three breeds are displayed. I realize this might not be the way to set it up for incremental difficulty and that the number of random images would somehow have to be changed dynamically according to the player's performance.
           .then(response => {
                const image = (response.body.message)
                // console.log('image from api',image)
                this.props.setBreedsList(image)
           })
           .catch(console.error)
    
      }

    render() {
        if (!this.props.breeds) return 'Loading...'
        // if no breeds in data show loading message
        return <Game1 />
    }

}
const mapStateToProps = state => {
    return {
      breeds: state.breeds
    };
  };

export default connect(mapStateToProps,{ setBreedsList })(GamesContainer)
