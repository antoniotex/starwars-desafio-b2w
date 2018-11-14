import React from 'react'
import PropTypes from 'prop-types'
import '../assets/styles/scss/app.scss';
import Card from '../components/card'
import Button from '../components/button'

const AppContainer = ({ planetInfo, nextPlanet }) => (
    <div className="app-container">
        { planetInfo && <Card planetInfo={ planetInfo } /> }
        { planetInfo && <Button nextPlanet={ nextPlanet } /> }
    </div>
)

AppContainer.propTypes = {
    planetInfo: PropTypes.object,
    nextPlanet: PropTypes.func
}

export default AppContainer