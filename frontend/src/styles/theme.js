// temas que serão adicionados de forma padrão por toda a aplicação
import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2.0rem',
      fontWeight: 300,
      color: '#3E7C17',
    },
  },
});

export default theme;