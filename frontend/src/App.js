import React from 'react';
import Button from '@mui/material/Button';
import './App.css';
// import env from 'react-dotenv';

function App() {
  return (
    <div className="App">
      <h1>Aplicação para mostrar pesquisas cientificas.</h1>
      <Button
        variant="contained"
        color="success"
        onClick={() => window.console.log('versão do react-scripts, atualizada.')}
      >
        Contained
      </Button>
    </div>
  );
}

export default App;
