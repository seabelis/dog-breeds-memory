import React from 'react'
import { connect } from 'react-redux'
import Game1 from './Game1'
import request from 'superagent'
import { setBreedsList } from '../actions/breeds'
import { imgRandomizer } from '../actions/imgRandomizer'


  // Retrieves the data from the API.
  //How to match breed names from two api feeds?

class GamesContainer extends React.Component {
    componentDidMount() {
        this.props.setBreedsList()
        this.props.imgRandomizer()
        
        //  request
        //    .get(`https://dog.ceo/api/breeds/image/random/3`) 
        //    .then(response => {
        //         const image = (response.body.message)
        //         // console.log('image from api',image)
        //         this.props.setBreedsList(image)
        //    })
        //    .catch(console.error)
    
      }

    render() {
        if (!this.props.breeds) return 'Loading...'
        // if no breeds in data show loading message
        return <Game1 />
    }

}

// const mapDispatchToProps = dispatch => {
//     return {
//         imgRandomizer: actions.imgRandomizer

//     }
    
// }
// const mapDispatchToProps = {
//     imgRandomizer
//   }
//Not needed if in exporty default.

const mapStateToProps = state => {
    return {
      breeds: state.breeds,
    };
  };

export default connect(mapStateToProps, { setBreedsList, imgRandomizer }, )(GamesContainer)
