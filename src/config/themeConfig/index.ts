import { Theme } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#db2a2a",
    },
    secondary: {
      main: "#ff6d00",
    },
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export default theme;
