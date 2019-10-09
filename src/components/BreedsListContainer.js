import * as React from 'react'
import * as request from 'superagent'
import BreedsList from './BreedsList'
import {connect} from 'react-redux'
// import { helloWorld } from '../actions/test'
import { addBreed } from '../actions/ADD_BREED'



class BreedsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    request('https://dog.ceo/api/breeds/list/all')
      .then(response => this.setState({ breeds: Object.keys(response.body.message) }))
      this.props.addBreed('Test Breed')
    //If we bind action creators using connect, this.props.dispatch is no longer available.



  }

  render() {
    if (!this.state.breeds) return 'Loading...'
    return <BreedsList breeds={this.state.breeds} />    
  }
}
// export default connect(null, { helloWorld: helloWorld })(BreedsListContainer)
// Because the property name that we want to use (helloWorld) is the same as the name of the function that we are importing (helloWorld) we can simplify our connect to:
const mapStateToProps = state => {
    return {
      breeds: state.breeds
    };
  };
  
  export default connect(
    mapStateToProps,
    { addBreed: addBreed }
  )(BreedsListContainer);

