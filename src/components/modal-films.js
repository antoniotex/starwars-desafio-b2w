import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const ModalFilms = ({ featuredFilms, showModalFilms, handleOpenModalFilms }) => (
    <Modal isOpen={ showModalFilms } contentLabel={ 'Featured Films List' }>
    <span onClick={ showModalFilms = false }>&times;</span>
        <div>
            <h1>Films</h1>
            { featuredFilms.map((film, index) => (
                <p key={ index } >{ film.title }, { film.release_date.slice(0, 4) }</p>
            )) }
        </div>    
    </Modal>
)

ModalFilms.propTypes = {
    featuredFilms: PropTypes.array,
    showModalFilms: PropTypes.bool,
    handleOpenModalFilms: PropTypes.func
}

export default ModalFilms