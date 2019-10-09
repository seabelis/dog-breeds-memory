import * as React from 'react'
import * as request from 'superagent'
import BreedsList from './BreedsList'

export default class BreedsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://dog.ceo/api/breeds/list/all')
      .then(response => this.setState({ breeds: Object.keys(response.body.message) }))
  }

  render() {
    if (!this.state.breeds) return 'Loading...'
    return <BreedsList breeds={this.state.breeds} />    
  }
}