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
    let randomNumber = this.getRandomNumber(61)
    fetch(`https://swapi.co/api/planets/${randomNumber}/`)
    .then(res => res.json())
    .then(
      (result) => {
        if(result.name === 'unknown')
          this.nextPlanet();

        this.setState({
          planetInfo: {
            name: result.name,
            population: result.population,
            climate: result.climate,
            terrain: result.terrain,
            films: result.films
          }
        })
      }
    )
  }

  getRandomNumber(num){
    let number = Math.floor(Math.random() * num)
    if(number === 0)
      this.getRandomNumber(num)
    else
      return number
  }

  render() {
    return (
        <AppContainer
        planetInfo={ this.state.planetInfo }
        nextPlanet={ () => this.nextPlanet() }
        />
    );
  }
}

export default App;
