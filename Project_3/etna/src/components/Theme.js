import { createTheme } from '@mui/material/styles';
 
// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // customize primary color
    },
    secondary: {
      main: '#dc004e', // customize secondary color
    },
    // Add more custom colors as needed
  },
  typography: {
    fontFamily: [
      'Times New Roman',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '22', // customize heading font size
      fontWeight: 'bold', // customize heading font weight
      color: '#f05b5b',
      paddingTop: 20,
      textAlign: 'center',
    },
    // Add more typography styles as needed
  },
  // Add more custom styles here
});
 
export default theme;