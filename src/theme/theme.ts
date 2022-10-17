import { ThemeOptions } from '@mui/material/styles';

const lightThemeOptions: ThemeOptions = {
  palette: {
    background: {
      default: '#FAFAFA',
      paper: '#FFFAF1',
    },
    mode: 'light',
    text: {
      primary: '#28150B',
    },
    primary: {
      main: '#DEC19B',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 16,
    htmlFontSize: 16,
    body1: {
      fontWeight: 600,
      fontSize: 16,
    },
    button: {
      fontWeight: 700,
      fontSize: 16,
      textTransform: 'initial',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '8px 32px',
        },
      },
      variants: [
        {
          props: {
            variant: 'contained',
            color: 'primary',
          },
          style: {
            color: '#28150B',
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#28150B',
          cursor: 'pointer',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 'initial',
          boxShadow:
            '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 25px rgba(0, 0, 0, 0.25);',
        },
      },
    },
  },
};

export default lightThemeOptions;
