import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalProvider from './context/GlobalProvider';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
);

reportWebVitals();
