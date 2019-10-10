import React from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux';
import BreedsListContainer from './components/BreedsListContainer'
import { Route } from 'react-router-dom'
import BreedDetails from './components/BreedDetails';


class App extends React.Component {
render() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
        <h1 className="App-title">Breeds of Dogs</h1>
        <Route exact path="/" component={BreedsListContainer} />
        <Route path="/dog-breeds/:breed" component={BreedDetails} />

        </main>
      </div>
    </Provider>
  );
}
}
export default App;


