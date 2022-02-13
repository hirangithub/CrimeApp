import { createTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({});

export const theme = createTheme({
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: "auto"
        }
      },
    },
    palette: {
      primary: {
        main: '#0FA1F4',
      },
      secondary: {
        main: '#141414',
      },
      text: {
        primary: 'rgba(20, 20, 20, 1)',
        disabled: 'rgba(0, 0, 0, 0.38)',
      },
      background: {
        default: "#F0F2F5"
      }
    },    
    typography: {
      htmlFontSize: 16,
      fontFamily: "'TT Norms Pro', sans-serif",
      fontSize: 16,
      lineHeight: 18,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontFamily: "'TT Norms Pro', sans-serif",
        fontWeight: 700,
        fontSize: "2rem",
        lineHeight: "2.4rem",
        paddingBottom: "1rem",
        color: '#0FA1F4',
        [breakpoints.up('md')]: {
          fontSize: "2.6rem",
          lineHeight: "3.2rem",
        }
      },
      h2: {
        fontFamily: "'TT Norms Pro', sans-serif",
        fontWeight: 700,
        fontSize: "1.4rem",
        lineHeight: "1.4rem",
        paddingBottom: "1rem",
      },
      h3: {
        fontFamily: "'TT Norms Pro', sans-serif",
        fontWeight: 700,
        fontSize: "1rem",
        lineHeight: "1.4rem",
      },
      h4: {
        fontFamily: "'TT Norms Pro', sans-serif",
        fontWeight: 700,
        fontSize: "1.4rem",
        lineHeight: "1.8rem",
        paddingBottom: ".5rem",
      },
      subtitle1: {
        fontFamily: "'TT Norms Pro', sans-serif",
        fontWeight: 400,
        fontSize: "1.1rem",
        lineHeight: "1.6rem"
      },
      subtitle2: {
        fontFamily: "'TT Norms Pro', sans-serif",
        fontWeight: 400,
        fontSize: "0.9rem",
        lineHeight: "1.1rem",
      },
      button: {
        fontFamily: "'TT Norms Pro', sans-serif",
        fontSize: "1.1rem",
        lineHeight: "1.1rem",
      }
    },    
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none',
          padding: '.8rem 1.5rem',
          fontSize: ".9rem",
        },
        containedSecondary: {
          fontWeight: 700,
          backgroundColor: '#0FA1F4',
          color: '#FFFFFF',
          '&:hover': {
              backgroundColor: '#0582C9',
          },
        },
      },
      MuiOutlinedInput: {
        root: {
          backgroundColor: '#FFFFFF',
          padding: '0',
          fontSize: 16,
          "& $notchedOutline": {
            borderColor: "#E4E6EF"
          },
          "&:hover $notchedOutline": {
            borderColor: "#B9BAC3"
          },
          "&$focused $notchedOutline": {
            borderColor: "#B9BAC3"
          },
          "&&& $input": {
            padding: "12.2px 14px"
          }
        }
      },
      MuiInputLabel: {
        outlined: {
             transform: 'translate(14px, 13px)',
        },
      },
      MuiFormLabel: {
        root: {
          fontSize: 15,
          lineHeight: 1.3,
          paddingBottom: '.5rem'
        }
      },
      MuiSelect: {
        root: {
          borderRadius: 0,
          fontSize: 16,
        }
      },
      MuiCheckbox: {        
        colorSecondary: {   
          '&$checked': {
            color: '#0FA1F4',
          },        
        },
      },
      MuiToolbar: {
        root: {
          backgroundColor: '#FFFFFF',
        }
      },
      MuiBreadcrumbs: {
        root: {
          backgroundColor: '#FFFFFF',
          fontSize: 14,
        }
      },
      MuiAlert: {
        root: {
          borderColor: '#0FA1F4',
        }
      },
      MuiDivider: {
        root: {
          borderColor: '#E4E6EF',
          borderWidth: 0,
          borderBottomWidth: '0.1rem',
          borderStyle: 'solid',
          backgroundColor: 'transparent',
        }
      },
    },
    props: {
      MuiButton: {
        disableElevation: true,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1400,
      },
    },
  });