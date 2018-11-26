import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const ModalFilms = ({ featuredFilms, showModalFilms, handleCloseModal, loadingModal }) => (
    <Modal 
     className="modalfilm-content" 
     isOpen={ showModalFilms } 
     contentLabel={ 'Featured Films List' } 
     onRequestClose={ handleCloseModal } 
     overlayClassName="modalfilm-overlay">
        { loadingModal && <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> }
        { featuredFilms && <div className='name'>
            { featuredFilms.map((film, index) => (
                <p key={ index } >{ film.title }, { film.release_date.slice(0, 4) }</p>
            )) }
        </div> }
        <div className='close' ><p onClick={ handleCloseModal } >&times;</p></div>     
    </Modal>
)

ModalFilms.propTypes = {
    featuredFilms: PropTypes.array,
    showModalFilms: PropTypes.bool,
    handleCloseModal: PropTypes.func,
    loadingModal: PropTypes.bool
}

export default ModalFilms