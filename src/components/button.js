import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ nextPlanet }) => (
    <div>
        <button onClick={ nextPlanet } >Next</button>
    </div>
)

Button.propTypes = {
    nextPlanet: PropTypes.func
}

export default Button