import React from 'react';
import { Grid, Typography, Paper, Box } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import theme from '../components/Theme';
import styled from '@emotion/styled';

const Container = styled(Box)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto; /* Centriranje kontejnera */
  max-width: 1200px; /* Maksimalna širina kontejnera */
`;

const HeroText = styled(Typography)`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  text-align: center;
`;

const BodyText = styled(Typography)`
  text-align: center;
  font-size: 1.2em; /* Povećan font */
  margin-bottom: 20px;
`;

const Title = styled(Typography)`
  font-weight: bold;
  color: #f05b5b;
`;

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <HeroText variant="h1">
              Welcome to Photographic Services Blog
            </HeroText>
          </Grid>
          <Grid item xs={12}>
            <BodyText variant="body1" paragraph>
              Discover the latest in photography tips, services, and inspiration.
            </BodyText>
          </Grid>
        </Grid>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper>
              <Title variant="h5">Professional Portraits</Title>
              <BodyText variant="body1">Capturing the best moments with professional portrait services.</BodyText>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper>
              <Title variant="h5">Event Photography</Title>
              <BodyText variant="body1">High-quality photography for weddings, parties, and corporate events.</BodyText>
            </StyledPaper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <StyledPaper>
              <Title variant="h5">Product Shoots</Title>
              <BodyText variant="body1">Professional product photography for e-commerce and marketing.</BodyText>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
