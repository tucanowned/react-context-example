import React from 'react';
import './App.css';
import { Container } from './components/Container';


import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Container />
    </GlobalProvider>
  );
}

export default App;
