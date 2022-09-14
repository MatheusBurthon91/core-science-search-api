// temas que serão adicionados de forma padrão por toda a aplicação
import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2.0rem',
      fontWeight: 300,
      color: '#F9F5EB',
    },
  },
  palette: {
    background: {
      default: '#AFB4FF',
    },
  },
});

export default theme;
