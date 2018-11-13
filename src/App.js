import React, { Component } from 'react';
import AppContainer from './container/app-container'
import './assets/styles/scss/app.scss';

class App extends Component {
  constructor(){
    super()
    this.state = {
      planetInfo: null
    }
  }

  componentWillMount(){
    this.nextPlanet()
  }

  nextPlanet(){
    fetch(`https://swapi.co/api/planets/40/`)
    .then(res => res.json())
    .then(
      (result) => {
        console.log('result', result)
        this.setState({
          planetInfo: {
            name: result.name,
            population: result.population,
            climate: result.climate,
            terrain: result.terrain
          }
        })
        console.log(this.state.planetInfo)
      }
    )
  }

  getRandomNumber(num){
    let number = Math.floor(Math.random() * num)
    console.log(number);
  }

  render() {
    return (
      <AppContainer 
      planetInfo={ this.state.planetInfo }
      />
    );
  }
}

export default App;
