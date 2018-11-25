import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RandomComponent from './RandomComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RandomComponent />
      </div>
    );
  }
}

export default App;
