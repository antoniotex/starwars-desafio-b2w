import React, { Component } from 'react';
import AppContainer from './container/app-container'
import './assets/styles/scss/app.scss';
import Background from './components/background'
import Loading from './components/loading'

class App extends Component {
  constructor(){
    super()
    this.state = {
      planetInfo: null,
      featuredFilms: [],
      showModalFilms: false,
      loading: false,
      loadingModal: false
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
    this.setState({ loading: true })
    let randomNumber = this.getRandomNumber(61)
    if(randomNumber === undefined)
      this.nextPlanet()
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
          featuredFilms: [],
          loading: false
        })
      },
      (error) => {
        console.log('', error);
      }
    )
  }

  getFilms(){
    debugger
    if(!this.state.planetInfo.films.length){
      return
    }
    this.handleOpenModalFilms()
    this.setState({
      featuredFilms: [],
      loadingModal: true
    })
    this.state.planetInfo.films.map((film => {
      fetch(film)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            featuredFilms: [...this.state.featuredFilms, result],
            loadingModal: false
          })
        }
      )
      return 0;
    }))
  }

  getRandomNumber(num){
    let number = Math.floor(Math.random() * num + 1)
    if(number === 0 || number === undefined)
      this.getRandomNumber(num)
    else
      return number
  }

  render() {
    return (
        <div className="App">
          <Background />
          { this.state.loading && <Loading /> }
          { !this.state.loading && <AppContainer
            planetInfo={ this.state.planetInfo }
            nextPlanet={ () => this.nextPlanet() }
            getFilms={ () => this.getFilms() }
            featuredFilms={ this.state.featuredFilms }
            showModalFilms={ this.state.showModalFilms }
            handleCloseModal={ () => this.handleCloseModal() }
            loadingModal={ this.state.loadingModal }
          /> }
        </div>
    );
  }
}

export default App;
