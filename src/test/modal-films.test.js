import React from 'react';
import ReactDOM from 'react-dom';
import ModalFilms from '../components/modal-films'
import { shallow } from 'enzyme'

describe('ModalFilms renders without crashing', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<ModalFilms />, div)
      ReactDOM.unmountComponentAtNode(div)
    });
  })

  describe('ModalFilms renders without crashing', () => {
    it('renders without crashing', () => {
        const component = shallow(<ModalFilms />)
        console.log(component)
        expect(component).toHaveLength(1)
    });
  })