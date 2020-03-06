import { createMuiTheme } from "@material-ui/core/styles";

const Theme = createMuiTheme({
  palette: {
    common: {
      myRed: "#ff4400"
    },
    primary: {
      main: "#ff4400"
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff"
    }
  }
});

export default Theme;
