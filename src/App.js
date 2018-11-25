import React, { Component } from 'react';
import ContextProvider from './ContextProvider';
import RandomComponent from './RandomComponent';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  }
}

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <div className="App" style={style.container}>
          <RandomComponent />
        </div>
      </ContextProvider>
    );
  }
}

export default App;
