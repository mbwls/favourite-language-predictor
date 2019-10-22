import React from 'react';
import ReactDOM from 'react-dom';
import ResultOutput from '../components/ResultOutput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ResultOutput />, div);
  ReactDOM.unmountComponentAtNode(div);
});