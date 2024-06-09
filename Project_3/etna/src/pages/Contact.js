import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import '../assets/Contact.css';


 
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);
 
    useEffect(() => {
        const savedName = localStorage.getItem('name');
        const savedEmail = localStorage.getItem('email');
        if (savedName) setName(savedName);
        if (savedEmail) setEmail(savedEmail);
    }, []);
 
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
 
        if (!name) newErrors.name = 'Name is required';
        if (!email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
        if (!message) newErrors.message = 'Message is required';
 
        setErrors(newErrors);
 
        if (Object.keys(newErrors).length === 0) {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('message', message);
            setOpen(true);
        }
    };
 
    const handleClose = () => setOpen(false);
 
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center' }} className='pozadina'>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3, width: '50%' }} className="form-container">
                <Typography variant="h4" className="naslov" component="h1" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Times New Roman', color: '#f05b5b' }}>
                    Contact Us
                </Typography>
                <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={!!errors.message}
                    helperText={errors.message}
                />
                <Button type="submit" variant="contained" sx={{ mt: 2, width: '100%' }}>
                    Submit
                </Button>
            </Box>
            
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{"Message Sent"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Message is successfully sent!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}
 
export default Contact;