import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import Card from '../components/card'

const cardProps = {
  planetInfo: {
    films: ['O Retorno de Jedi', 'Ameaça Fantasma']
  },
  getFilms: () => {}
}

const wrapper = mount(<Card  />)
const component = shallow(<Card { ...cardProps } />)

describe('Card renders without crashing', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Card />, div)
      ReactDOM.unmountComponentAtNode(div)
    });

  })