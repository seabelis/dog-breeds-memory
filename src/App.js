import React from 'react';
import './App.css';
import store from './store'
import {Provider} from 'react-redux';

class App extends React.Component {
render() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Breeds of Dogs</h1>
        </header>
        <main>

        </main>
      </div>
    </Provider>
  );
}
}
export default App;
