import React from 'react'
import { connect } from 'react-redux'
import BreedDetails from './BreedDetails'

class BreedDetailsContainer extends React.Component {
  render() {
    const breed = this.props.breed
    if (!breed) return null

    return <BreedDetails breed={breed} />
  }
}

const mapStateToProps = (state) => {
  if (state.selectedBreed !== null) {
    return {
      breed: state.breeds.find(breed => breed.id === state.selectedBreed)
    }
  }
  return {}
}

export default connect(mapStateToProps)(BreedDetailsContainer)