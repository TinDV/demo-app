import React, { Component } from 'react';
import './App.css';
import InputText from './Components/InputText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <InputText />
        </header>
      </div>
    );
  }

}

export default App;
