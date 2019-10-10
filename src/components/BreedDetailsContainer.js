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
           console.log('images',images)
           this.props.selectBreed(images)
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
    // console.log('images : ',this.props.images )
    const breed = this.props.breed
    if (!breed) return null

    return <BreedDetails images={this.props.images} />
  }
}

const mapStateToProps = (state) => {
    return {
      images: state.selectBreed
    }
}

export default connect(mapStateToProps,{selectBreed})(BreedDetailsContainer)