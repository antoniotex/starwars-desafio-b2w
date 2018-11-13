import React, { Component } from 'react';
import AppContainer from './components/container/app-container'
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
