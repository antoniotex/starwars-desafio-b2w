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

  /**
   * Abre modal para exibir lista de filmes
   */
  handleOpenModalFilms(){
    this.setState({ showModalFilms: true })
  }

  /**
   * Feche modal de exibir filmes
   */
  handleCloseModal(){
    this.setState({ showModalFilms: false })
  }

  /**
   * Consulta a API e trás informações de acordo com o id passado
   */
  nextPlanet(){
    this.setState({ loading: true })
    let id = this.getRandomNumber(61)
    if(id === undefined)
      this.nextPlanet()
    fetch(`https://swapi.co/api/planets/${id}/`)
    .then(res => res.json())
    .then(
      (result) => {
        if(result.name === 'unknown'){
          this.nextPlanet()
          return
        }
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

  /**
   * Consulta a API e preenche array de filmes de acordo com os id's passados por parâmetro
   */
  getFilms(){
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

  /**
   * Recebe um numero limite e retorna numero aleatorio dntro desse limite
   * @param {*} num - Número limite
   */
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
