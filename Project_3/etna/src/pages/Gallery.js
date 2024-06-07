import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';



const Gallery = () => {
  

    return (
        <Grid container spacing={2} style={{ paddingTop: '20px', paddingBottom: '20px', }}>
            <Grid item xs={6} sm={3}>
                <Card>
                    <CardMedia
                        component="img"
                        image={image1}
                        alt="Image 1"
                    />
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card>
                    <CardMedia
                        component="img"
                        image={image2}
                        alt="Image 2"
                    />
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card>
                    <CardMedia
                        component="img"
                        image={image3}
                        alt="Image 3"
                    />
                </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Card>
                    <CardMedia
                        component="img"
                        image={image4}
                        alt="Image 4"
                    />
                </Card>
            </Grid>
        

            <Grid item xs={6} sm={3}>
            <Card>
                <CardMedia
                    component="img"
                    image={image5}
                    alt="Image 5"
                />
            </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
            <Card>
                <CardMedia
                    component="img"
                    image={image6}
                    alt="Image 6"
                />
            </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
            <Card>
                <CardMedia
                    component="img"
                    image={image7}
                    alt="Image 7"
                />
            </Card>
            </Grid>
            <Grid item xs={6} sm={3}>
            <Card>
                <CardMedia
                    component="img"
                    image={image8}
                    alt="Image 8"
                />
            </Card>
            </Grid>
        </Grid>
    );
};

export default Gallery;
