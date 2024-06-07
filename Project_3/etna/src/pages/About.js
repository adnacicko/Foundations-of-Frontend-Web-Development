import React from 'react';
import { Grid, Typography, Container, Card, CardMedia } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import Theme from '../components/Theme';
import portraitImage from '../assets/portrait.jpg';
import eventImage from '../assets/event.jpg';
import productImage from '../assets/product.jpg';

const About = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h1" align="center" gutterBottom>
                            About Us
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1" align="center" gutterBottom>What we offer to you, check below!</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={portraitImage}
                                alt="Professional Portraits"
                            />
                        </Card>
                        <Typography variant="h5" align="center" color="#ffbf00" fontWeight="bold">
                            Portrait
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={eventImage}
                                alt="Event Photography"
                            />
                        </Card>
                        <Typography variant="h5" align="center" color="#ffbf00" fontWeight="bold">
                            Event
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={productImage}
                                alt="Product Shoots"
                            />
                        </Card>
                        <Typography variant="h5" align="center" color="#ffbf00" fontWeight="bold">
                            Product
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            
        </ThemeProvider>
        
    );
};

export default About;
