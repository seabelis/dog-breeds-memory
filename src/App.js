import React from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux';
import BreedsListContainer from './components/BreedsListContainer'

class App extends React.Component {
render() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
        <h1 className="App-title">Breeds of Dogs</h1>
          <BreedsListContainer />
        </main>
      </div>
    </Provider>
  );
}
}
export default App;


