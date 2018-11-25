import React from 'react';
import ReactDOM from 'react-dom';
import Background from '../components/background'

describe('Background renders without crashing', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Background />, div)
      ReactDOM.unmountComponentAtNode(div)
    });
  })