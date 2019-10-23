import React from 'react';
import ReactDOM from 'react-dom';
import LanguageFinder from '../components/LanguageFinder';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LanguageFinder />, div);
  ReactDOM.unmountComponentAtNode(div);
});