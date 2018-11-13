import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/card'

const AppContainer = ({ planetInfo }) => (
    <div>
        { planetInfo && <Card planetInfo={ planetInfo } /> }
    </div>
)

AppContainer.propTypes = {
    planetInfo: PropTypes.object
}

export default AppContainer