import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const ModalFilms = ({ featuredFilms, showModalFilms, handleCloseModal }) => (
    <Modal className="modalfilm-content" isOpen={ showModalFilms } contentLabel={ 'Featured Films List' } onRequestClose={ handleCloseModal } overlayClassName="modalfilm-overlay" >
        <div>
            <p onClick={ handleCloseModal } >&times;</p>
            <h1>Film</h1>
            { featuredFilms.map((film, index) => (
                <h5 key={ index } >{ film.title }, { film.release_date.slice(0, 4) }</h5>
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