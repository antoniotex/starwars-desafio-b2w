import React, { Component } from 'react';
import AppContainer from './container/app-container'
import './assets/styles/scss/app.scss';

class App extends Component {
  constructor(){
    super()
    this.state = {}
  }

  getRandomNumber(num){
    let number = Math.floor(Math.random() * num)
    console.log(number);
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;
