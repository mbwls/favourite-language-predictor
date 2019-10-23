import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import LanguageFinder from './components/LanguageFinder';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <LanguageFinder />
    </div>
  );
}

export default App;
