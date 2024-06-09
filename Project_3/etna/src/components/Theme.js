import { createTheme } from '@mui/material/styles';
 
// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e', 
    },
   
  },
  typography: {
    fontFamily: [
      'Times New Roman',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '22', 
      fontWeight: 'bold', 
      color: '#f05b5b',
      paddingTop: 20,
      textAlign: 'center',
    },
    
  },
  
});
 
export default theme;