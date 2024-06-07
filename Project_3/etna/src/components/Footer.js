import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'pink', padding: '20px 0', marginTop: 'auto' }}>
            <Container maxWidth="md">
                <Typography variant="body1" color="textSecondary" align="center">
                    © {new Date().getFullYear()} ❤️On Click. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
