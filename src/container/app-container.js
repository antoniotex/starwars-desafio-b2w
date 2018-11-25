import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/scss/app.scss';
import Card from '../components/card'
import Button from '../components/button'
import ModalFilms from '../components/modal-films'

const AppContainer = ({ planetInfo, nextPlanet, getFilms, featuredFilms, showModalFilms, handleCloseModal, loadingModal }) => (
    <div className="app-container">
        { planetInfo && <Card planetInfo={ planetInfo } getFilms={ getFilms } /> }
        { planetInfo && <Button nextPlanet={ nextPlanet } /> }
        <ModalFilms loadingModal={ loadingModal } featuredFilms={ featuredFilms } showModalFilms={ showModalFilms } handleCloseModal={ handleCloseModal } />
    </div>
)

AppContainer.propTypes = {
    planetInfo: PropTypes.object,
    nextPlanet: PropTypes.func,
    getFilms: PropTypes.func,
    featuredFilms: PropTypes.array,
    showModalFilms: PropTypes.bool,
    handleCloseModal: PropTypes.func,
    loadingModal: PropTypes.bool
}

export default AppContainer