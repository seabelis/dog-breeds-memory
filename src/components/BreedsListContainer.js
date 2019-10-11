import * as React from 'react'
import * as request from 'superagent'
import BreedsList from './BreedsList'
import {connect} from 'react-redux'
// import { helloWorld } from '../actions/test'
import { setBreedsList } from '../actions/breeds'

  // Retrieves the data from the API.
//use this.props instead of this.state


class BreedsListContainer extends React.Component {

componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => 
        this.props.setBreedsList(Object.keys(response.body.message)) 
      )
  }
  
  render() {

    if (!this.props.breeds) return 'Loading...'
    // if no breeds in data show loading message
    return (
          <BreedsList breeds={this.props.breeds} /> )   
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
    { setBreedsList: setBreedsList }
  )(BreedsListContainer);

