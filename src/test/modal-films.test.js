import React from 'react';
import ReactDOM from 'react-dom';
import ModalFilms from '../components/modal-films'
import { shallow } from 'enzyme'

describe('<ModalFilms />', () => {
    const modalProps = {
        featuredFilms: [],
        showModalFilms: false,
        handleCloseModal: () => {},
        loadingModal: false
    }
    const component = shallow(<ModalFilms { ...modalProps } />)
    // console.log('Resultado: ', component.props().children)

    it('renders without crashing', () => {
        expect(component).toHaveLength(1)
    });

    it('should be content label text Featured Films List', () => {
        expect(component.props().contentLabel).toEqual('Featured Films List')
    })

    // it('prop index should be number', () => {
    //     expect(component.find('p').prop(key)).toEqual(1)
    // })
})