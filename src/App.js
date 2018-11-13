import React, { Component } from 'react';
import AppContainer from './container/app-container'
import './assets/styles/scss/app.scss';

class App extends Component {
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;
