import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import Button from '../components/button'

const buttonProps = {
  nextPlanet: () => {}
}
const component = shallow(<Button { ...buttonProps } />)

describe('<button />', () => {
  it('renders without crashing', () => {
    expect(component).toHaveLength(1)
  });

  it('should be button text', () => {
    expect(component.props().children).toEqual('Next')
  })
})