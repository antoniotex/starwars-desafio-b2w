import React from 'react'
import PropTypes from 'prop-types'

const ModalFilms = ({ featuredFilms }) => (
    <div>
        <p>{ featuredFilms[0].title }</p>
        <p>{ featuredFilms[0].releaseDate }</p>
    </div>
)

ModalFilms.propTypes = {
    featuredFilms: PropTypes.array
}

export default ModalFilms