import { createTheme } from '@material-ui/core/styles';

const whitesmoke = '#f5f5f5';
const white = '#fff';
const black = '#000';

const theme = createTheme({
  palette: {
    common: {
      whitesmoke: `${whitesmoke}`,
    },
    primary: {
      main: `${white}`,
    },
    secondary: {
      main: `${black}`,
    },
  },
});

export default theme;
