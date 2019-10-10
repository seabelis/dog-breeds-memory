import React from 'react'
import { connect } from 'react-redux'
import BreedDetails from './BreedDetails'
import request from 'superagent'
import {selectBreed} from '../actions/selectBreed'

class BreedDetailsContainer extends React.Component {

  componentDidMount() {
    const breed = this.props.match.params.breed // corresponds to:  "/dog-breeds/:breed"
     request
       .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/10`)
       .then(response => {
           const images = (response.body.message)
           console.log('images from api',images)
           this.props.selectBreed(images)
       })
       .catch(console.error)

  }

  selectBreed(breed) {
    console.log('selected breed:', breed)
  }

  render() {
    const breed = this.props.breed
    console.log( breed )
    console.log('images : ',this.props.images )
    // if (!breed) return null
    return <BreedDetails images={this.props.images} match={this.props.match} />
  }
}

const mapStateToProps = (state) => {
    return {
      images: state.selectedBreed
    }
}

export default connect(mapStateToProps,{selectBreed})(BreedDetailsContainer)