import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
      <h1>Aplicação para mostrar pesquisas cientificas.</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => console.log('montando o setup inicial')}
      >
          Default
      </Button>
    </div>
  );
}

export default App;
