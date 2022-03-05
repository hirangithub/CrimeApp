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
        main: '#3f51b5',
      },
      secondary: {
        main: '#141414',
      },
      text: {
        primary: 'rgba(0, 0, 0, 1)',
        disabled: 'rgba(0, 0, 0, 0.38)',
      },
      background: {
        default: "#EEEEEE"
      }
    },    
    typography: {
      htmlFontSize: 14,
      fontFamily: "'TT Norms Pro', sans-serif",
      fontSize: 14,
      lineHeight: 16,
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
        fontSize: "1.2rem",
        lineHeight: "1.2rem",
        paddingBottom: "1rem",  
      },
      h4: {
        fontFamily: "'TT Norms Pro', sans-serif",
        fontWeight: 700,
        fontSize: "1.1rem",
        lineHeight: "1.5rem",
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
        fontSize: "0.8rem",
        lineHeight: "1rem",
      },
      button: {
        fontFamily: "'TT Norms Pro', sans-serif",
        fontSize: "1rem",
        lineHeight: "1rem",
      }
    },    
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none',
          padding: '.6rem 1rem',
          fontSize: ".8rem",
        },
        containedSecondary: {
          fontWeight: 700,
          backgroundColor: '#3f51b5',
          color: '#FFFFFF',
          '&:hover': {
              backgroundColor: '#475bcc',
          },
        },
      },
      MuiOutlinedInput: {
        root: {
          backgroundColor: '#FFFFFF',
          padding: '0',
          fontSize: 14,
          "& $notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.23)"
          },
          "&:hover $notchedOutline": {
            borderColor: "#3f51b5"
          },
          "&$focused $notchedOutline": {
            borderColor: "#3f51b5"
          },
          "&&& $input": {
            padding: "10px 12px"
          }
        }
      },
      MuiInputLabel: {
        color: 'red',
        outlined: {
             transform: 'translate(14px, 13px)',
        },
      },
      MuiFormLabel: {
        root: {
          fontSize: 14,
          lineHeight: 1.3,
          paddingBottom: '.5rem',
          color: '#141414',
        }
      },
      MuiSelect: {
        root: {
          borderRadius: 0,
          fontSize: 14,
        }
      },
      MuiAvatar: {
        root: {
          width: '43px',
          height: '43px'
        }
      },
      MuiCheckbox: {        
        colorSecondary: {   
          '&$checked': {
            color: '#3f51b5',
          },        
        },
      },
      MuiToolbar: {
        root: {
          backgroundColor: '#3f51b5',
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