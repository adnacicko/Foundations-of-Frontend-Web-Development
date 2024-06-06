import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import theme from '../components/Theme';

const Gallery = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3} style={{ padding: '20px' }}>
        <Grid item xs={12}>
          <Typography variant="h1">Gallery</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="body1">Prvi grid item</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="body1">Drugi grid item</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="body1">Treći grid item</Typography>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Gallery;
