import React from 'react';
import ReactDOM from 'react-dom';
import LanguageDisplay from '../components/LanguageDisplay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LanguageDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});