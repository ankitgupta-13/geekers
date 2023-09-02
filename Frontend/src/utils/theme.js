import { createTheme } from "@mui/material/styles";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: "#1C2834",
    },
    background: {
      default: "#0D1B2A",
    },
    secondary: {
      main: "#0d1b2a",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Poppins",
    color: "#FFFFFF",
    h1: {
      fontSize: "5rem",
      "@media (max-width:600px)": {
        fontSize: "3rem",
      },
      "@media (max-width:900px)": {
        fontSize: "4rem",
      },
      "@media (max-width:1200px)": {
        fontSize: "3rem",
      },
      "@media (max-width:1600px)": {
        fontSize: "4rem",
      },
      "@media (max-width:2000px)": {
        fontSize: "3rem",
      },
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#023047",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          color: "#FFFFFF",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          backgroundColor: "#023047",
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          backgroundColor: "#023047",
          "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#0d1b2a",
          },
          // "&:selected": {
          //   backgroundColor: "black",
          // },
        },
        selected: {
          "&.Mui-selected": {
            backgroundColor: "turquoise",
            color: "black",
            fontWeight: 600,
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          backgroundColor: "#023047",
          "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#0d1b2a",
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          label: {
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          label: {
            color: "#FFFFFF",
          },
          // backgroundColor: "#023047",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          label: {
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          color: "#FFFFFF",
        },
      },
    },
    MuiIcons: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
  },
});

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#1C2834",
    },
    background: {
      default: "#AEE2FF",
    },
    secondary: {
      main: "#e0e1dd",
    },
    text: {
      primary: "#0d1b2a",
    },
  },
  typography: {
    fontFamily: "Poppins",
    color: "black",
    // color: "#0d1b2a",
    h1: {
      fontSize: "5rem",
      "@media (max-width:600px)": {
        fontSize: "3rem",
      },
      "@media (max-width:900px)": {
        fontSize: "4rem",
      },
      "@media (max-width:1200px)": {
        fontSize: "3rem",
      },
      "@media (max-width:1600px)": {
        fontSize: "4rem",
      },
      "@media (max-width:2000px)": {
        fontSize: "3rem",
      },
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#93C6E7",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          backgroundColor: "#023047",
          "&:hover": {
            color: "#0d1b2a",
            backgroundColor: "#FFFFFF",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          color: "#FFFFFF",
          backgroundColor: "#1E1E1E",
          label: {
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          color: "#FFFFFF",
          backgroundColor: "#1E1E1E",
          label: {
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          label: {
            color: "#FFFFFF",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          backgroundColor: "#023047",
          "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#0d1b2a",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          backgroundColor: "#023047",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          // color: "#FFFFFF",
          "&:hover": {
            // color: "#FFFFFF",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },
});
