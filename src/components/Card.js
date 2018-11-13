import React from  'react'
import PropTypes from 'prop-types'

const Card = ({ planetInfo }) => (
    <div>
        <h2>Planet Name: { planetInfo.name } </h2>
        <p>Population: { planetInfo.population } </p>
        <p>Climate: { planetInfo.climate } </p>
        <p>Terrains: { planetInfo.terrain } </p>
        { planetInfo.films != null && <p>Featured in { planetInfo.films.length } films</p> }
    </div>
)

Card.propTypes = {
    planetInfo: PropTypes.object
}

export default Card