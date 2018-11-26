import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';
import { shallow } from 'enzyme'

describe('App renders without crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

describe('Featured Films', () => {
  it('films', () => {
    const wrapper = shallow(<App />)
    const quantFilms = wrapper.state().planetInfo
    expect(quantFilms).toEqual(null)
  })
})

describe('Random Number Function Test', () => {
  it('should be a function', () => {
    expect(typeof App.prototype.getRandomNumber).toEqual('function')
  });
  it('should return number greater than or equal to 1', () => {
    expect(App.prototype.getRandomNumber(61)).toBeGreaterThanOrEqual(1)
  });
  it('should return number less than or equal to 61', () => {
    expect(App.prototype.getRandomNumber(61)).toBeLessThanOrEqual(61)
  });
  it('should return number greater than or equal to 1', () => {
    expect(App.prototype.getRandomNumber(0)).toBeGreaterThanOrEqual(1)
  });
  it('should return number less than or equal to 61', () => {
    expect(App.prototype.getRandomNumber(0)).toBeLessThanOrEqual(61)
  });
})

describe('Get Films Functions Test', () => {
  it('should to be defined', () => {
    expect(App.prototype.getFilms).toBeDefined()
  })
})