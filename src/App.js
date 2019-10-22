import React from 'react';
import NameInput from './components/NameInput';
import Container from '@material-ui/core/Container';


function App() {
  return (
    <div className='App'>
      <Container maxWidth='sm'>
        <h2>YOUR FAVOURITE LANGUAGE</h2>
        <NameInput />
      </Container>
    </div>
  );
}

export default App;
