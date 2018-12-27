import React, { Component } from 'react';
import './App.css';
import InputText from './Components/InputText';
import HomePage from './Components/HomePage';
import RouterURL from './routerURL';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RouterURL></RouterURL>
        </header>
      </div>
    );
  }

}

export default App;
