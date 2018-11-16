import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/scss/app.scss';
import Card from '../components/card'
import Button from '../components/button'
import ModalFilms from '../components/modal-films'

const AppContainer = ({ planetInfo, nextPlanet, getFilms, featuredFilms }) => (
    <div className="app-container">
        { planetInfo && <Card planetInfo={ planetInfo } getFilms={ getFilms } /> }
        { planetInfo && <Button nextPlanet={ nextPlanet } /> }
        { (featuredFilms.length > 0) && <ModalFilms featuredFilms={ featuredFilms } /> }
    </div>
)

AppContainer.propTypes = {
    planetInfo: PropTypes.object,
    nextPlanet: PropTypes.func,
    getFilms: PropTypes.func,
    featuredFilms: PropTypes.array
}

export default AppContainer