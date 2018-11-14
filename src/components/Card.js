import React from  'react'
import PropTypes from 'prop-types'

const Card = ({ planetInfo }) => (
    <div className='card'>
        <div className="card-name">  
            <h1>{ planetInfo.name } </h1>
        </div>
        <div className='card-info'>
            <p>Diameter: { planetInfo.diameter }</p>
            <p>Population: { planetInfo.population } </p>
            <p>Climate: { planetInfo.climate } </p>
            <p>Terrains: { planetInfo.terrain } </p>
            { planetInfo.films != null && <p>Featured in { planetInfo.films.length } { planetInfo.films.length ===1 ? 'film' : 'films' }</p> }
        </div>
    </div>
)

Card.propTypes = {
    planetInfo: PropTypes.object
}

export default Card