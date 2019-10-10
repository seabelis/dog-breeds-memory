import React from 'react'
import { connect } from 'react-redux'
import BreedDetails from './BreedDetails'
import request from 'superagent'

class BreedDetailsContainer extends React.Component {

  componentDidMount() {
    const breed = this.props.match.params.breed // this work only with Route:  "/dog-breeds/:breed"
     request
       .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/10`)
       .then(response => {
           const breedImages = (response.body.message)
           this.props.dispatch(selectBreed(breedImages))
       })
       .catch(console.error)


    // request('https://dog.ceo/api/breed/{ breed }/images/random/10')
    //   .then(response => 
    //     this.props.setImages(Object.keys(response.body.message)) 
    //   )
  }

  selectBreed(breed) {
    console.log('selected breed:', breed)
  }

  render() {
    const breed = this.props.breed
    if (!breed) return null

    return <BreedDetails breed={breed} />
  }
}

const mapStateToProps = (state) => {
  if (state.selectedBreed !== null) {
    return {
      breed: state.breeds.find(breed => breed === state.selectedBreed)
    }
  }
  return {}
}

export default connect(mapStateToProps)(BreedDetailsContainer)