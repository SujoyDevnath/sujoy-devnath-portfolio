import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import RoomIcon from '@mui/icons-material/Room';
import React from 'react';
import './Contact.css'
import emailjs from "emailjs-com";

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ecc4ech', 'template_2rh6zy2', e.target, 'user_6OBI7oKGUNYEeI62ii26l')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <Container sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ mb: 5 }}>Contact Me</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} lg={6} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box style={{ width: '75%', mx: 'end' }}>
                            <Typography variant="h4" sx={{ my: 'auto', textAlign: 'start' }}>Contact Info</Typography>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="h6" sx={{ my: 'auto', display: 'flex', alignItems: 'center' }}>
                                    <EmailIcon className="contact-icon" /> sujoydevnathdipta@gmail.com
                                </Typography>
                                <Typography variant="h6" sx={{ my: 'auto', display: 'flex', alignItems: 'center' }}>
                                    <LocalPhoneIcon className="contact-icon" /> +8801815205063
                                </Typography>
                                <Typography variant="h6" sx={{ my: 'auto', display: 'flex', alignItems: 'center' }}>
                                    <RoomIcon className="contact-icon" /> Lichubagan, Chandraghona
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <form onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Your Name" className="text-field input" />
                            <input type="email" name="email" placeholder="Your Email" className="text-field input" />
                            <input type="text" name="subject" placeholder="Subject" className="text-field input" />
                            <textarea type="email" name="message" placeholder="Message" className="text-field textarea" />
                            <Button type="submit" variant="contained" className="send-btn">Send <SendIcon sx={{ ml: 1 }} /></Button>
                        </form>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Contact;