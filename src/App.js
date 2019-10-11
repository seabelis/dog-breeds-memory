import React from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux';
import BreedsListContainer from './components/BreedsListContainer'
import { Route } from 'react-router-dom'
import BreedDetailsContainer from './components/BreedDetailsContainer'
import GamesContainer from './components/GamesContainer'


class App extends React.Component {
render() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
        <h1 className="App-title">Breeds of Dogs Quiz</h1>
        <Route exact path="/" component={BreedsListContainer} />
        <Route path="/breed/:breed" component={BreedDetailsContainer} />
        <Route path="/games/" component={GamesContainer} />


        </main>
      </div>
    </Provider>
  );
}
}
export default App;


