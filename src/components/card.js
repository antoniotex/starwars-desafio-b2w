import React from  'react'
import PropTypes from 'prop-types'

const Card = ({ planetInfo, getFilms }) => (
    <div>
        { planetInfo && 
        <div className='card'>
            <div className="card-name">  
                <h1>{ planetInfo.name }</h1>
            </div>
            <div className='card-info'>
                <p>Diameter: { planetInfo.diameter }</p>
                <p>Population: { planetInfo.population } </p>
                <p>Climate: { planetInfo.climate } </p>
                <p>Terrains: { planetInfo.terrain } </p>
            </div>
            <div className='card-films'>
                { planetInfo.films != null && 
                <p 
                title={ `${planetInfo.films.length > 0 ? 'Click to see featured films' : 'No films'}` } 
                className={ `${planetInfo.films.length > 0 ? 'hvr-pulse' : 'none'}` } 
                onClick={ getFilms }>
                    Featured in { planetInfo.films.length } { planetInfo.films.length === 1 ? 'film' : 'films' }
                </p> }
            </div>
        </div> }
    </div>
)

Card.propTypes = {
    planetInfo: PropTypes.object,
    getFilms: PropTypes.func
}

export default Card