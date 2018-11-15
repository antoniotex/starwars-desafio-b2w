import React, { Component } from 'react';
import AppContainer from './container/app-container'
import './assets/styles/scss/app.scss';

class App extends Component {
  constructor(){
    super()
    this.state = {
      planetInfo: null,
      featuredFilms: []
    }
  }

  componentWillMount(){
    this.nextPlanet()
  }

  componentWillUnmount(){
    this.setState({
      featuredFilms: []
    })
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
            diameter: result.diameter,
            population: result.population,
            climate: result.climate,
            terrain: result.terrain,
            films: result.films
          }
        })
      }
    )
  }

  getFilms(){
    this.state.planetInfo.films.map((film => {
      fetch(film)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            films: {
              title: result.title,
              releaseDate: result.release_date
            }
          })
        }
      )
      return 0;
    }))
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
        getFilms={ () => this.getFilms() }
        featuredFilms={ this.state.featuredFilms }
        />
    );
  }
}

export default App;
