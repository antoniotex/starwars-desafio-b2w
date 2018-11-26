import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ nextPlanet }) => (
    <button className='btn next-button' onClick={ nextPlanet } >Next</button>
)

Button.propTypes = {
    nextPlanet: PropTypes.func
}

export default Button