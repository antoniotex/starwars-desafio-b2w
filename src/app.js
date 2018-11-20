import React, { Component } from 'react';
import AppContainer from './container/app-container'
import './assets/styles/scss/app.scss';

class App extends Component {
  constructor(){
    super()
    this.state = {
      planetInfo: null,
      featuredFilms: [],
      showModalFilms: false
    }
  }

  componentWillMount(){
    this.nextPlanet()
  }

  handleOpenModalFilms(){
    this.setState({ showModalFilms: true })
  }

  handleCloseModal(){
    this.setState({ showModalFilms: false })
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
          },
          featuredFilms: []
        })
      }
    )
  }

  getFilms(){
    this.handleOpenModalFilms()
    this.setState({
      featuredFilms: []
    })
    console.log('entrei', this.state.featuredFilms)
    this.state.planetInfo.films.map((film => {
      fetch(film)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            featuredFilms: [...this.state.featuredFilms, result]
          })
        }
      )
      console.log('saindo', this.state.featuredFilms)
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
        showModalFilms={ this.state.showModalFilms }
        handleCloseModal={ () => this.handleCloseModal() }
        />
    );
  }
}

export default App;
