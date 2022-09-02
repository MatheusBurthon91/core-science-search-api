import React from 'react';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Aplicação para mostrar pesquisas cientificas.</h1>
      <Button
        variant="contained"
        color="success"
        onClick={() => console.log('versão do material UI atualizada.')}
      >
        Contained
      </Button>
    </div>
  );
}

export default App;
