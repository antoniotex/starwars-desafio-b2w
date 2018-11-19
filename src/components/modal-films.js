import React from 'react'
import PropTypes from 'prop-types'

const ModalFilms = ({ featuredFilms }) => (
    <div>
        <h1>Films</h1>
        { featuredFilms.map((film, index) => (
            <p key={ index } >{ film.title }, { film.release_date.slice(0, 4) }</p>
        )) }
    </div>
)

ModalFilms.propTypes = {
    featuredFilms: PropTypes.array
}

export default ModalFilms