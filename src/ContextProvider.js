import React from 'react';

export const AwesomeContext = React.createContext();

export default class ContextProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      awesomeVariable: 'Awesome text from provider',
    }
  }

  render() {
    return(
      <AwesomeContext.Provider value={this.state}>
        {this.props.children}
      </AwesomeContext.Provider>
    );
  }
}
