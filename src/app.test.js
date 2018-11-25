import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AppContainer from './container/app-container'

describe('App renders without crashing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

describe('AppContainer renders without crashing', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AppContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  });
})

describe('Random Number Test', () => {
  it('should return number greater than or equal to 1', () => {
    expect(App.prototype.getRandomNumber(61)).toBeGreaterThanOrEqual(1)
  });
  it('should return number less than or equal to 61', () => {
    expect(App.prototype.getRandomNumber(61)).toBeLessThanOrEqual(61)
  });
})