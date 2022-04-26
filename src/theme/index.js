import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff7a76',
    },
    secondary: {
      main: '#565656',
    },
    grey: {
      dark: '#BABABA',
      main: '#f8f9f9',
    },

    text: {
      secondary: '#ff7a76',
      primary: '#565656',
      disabled: '#f8f9f9',
      main: '#BABABA',
    },
  },
  typography: {
    fontFamily: 'revert',
    h1: { fontSize: '30px', fontWeight: 'bold', letterSpacing: '1px' },
    h2: { fontSize: '26px', fontWeight: 'bold' },
    h3: { fontSize: '24px', fontWeight: 'bold' },
    h4: { fontSize: '22px', fontWeight: 'bold' },
    h5: { fontSize: '20px', fontWeight: 'bold' },
    h6: { fontSize: '18px', fontWeight: 'bold' },
    body1: { fontSize: '22px' },
    body2: { fontSize: '18px' },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          color: '#f8f9f9',
          fontWeight: 'bold',
          letterSpacing: '1px',
          padding: '12px 20px',
          boxShadow: '0px 2px 15px #ff7a76',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        color: 'text.primary',
      },
    },
  },
});
