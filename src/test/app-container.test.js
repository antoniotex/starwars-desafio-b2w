import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from '../container/app-container'

describe('AppContainer renders without crashing', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<AppContainer />, div)
      ReactDOM.unmountComponentAtNode(div)
    });
  })