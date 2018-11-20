import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const ModalFilms = ({ featuredFilms, showModalFilms, handleCloseModal }) => (
    <Modal isOpen={ showModalFilms } contentLabel={ 'Featured Films List' }>
    <span onClick={ handleCloseModal } >&times;</span>
        <div>
            <h1>Film</h1>
            { featuredFilms.map((film, index) => (
                <p key={ index } >{ film.title }, { film.release_date.slice(0, 4) }</p>
            )) }
        </div>    
    </Modal>
)

ModalFilms.propTypes = {
    featuredFilms: PropTypes.array,
    showModalFilms: PropTypes.bool,
    handleCloseModal: PropTypes.func
}

export default ModalFilms