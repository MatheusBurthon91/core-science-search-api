// temas que serão adicionados de forma padrão por toda a aplicação
import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 300,
    },
  },
});

export default theme;
