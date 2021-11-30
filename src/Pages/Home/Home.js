import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Home = () => {
    return (
        <Container>
            <Grid container spacing={2} sx={{ my: 'auto' }}>
                <Grid item xs={12} md={7}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Hi, There</Typography>
                    <Typography variant="h4" sx={{ my: 3, fontWeight: 'bold' }}>I'm <span style={{ color: '#1f701f' }}>Sujoy Devnath</span></Typography>
                    <Typography variant="h5">
                        Hi, I'm Sujoy Devnath. I'm a high school student. I have learned the basics of Web Development. I'm currently seeking an internship or junior full-stack web development job. I'm a quick learner and I like to learn and apply new things. I always enjoy teamwork.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={5} sx={{ my: 'auto', mx: 'auto', display: 'flex', justifyContent: 'center' }}>
                    <img
                        src="https://i.ibb.co/8YJ6zBz/Sujoy-profile.jpg"
                        style={{
                            height: '300px',
                            width: '300px',
                            borderRadius: '50%',
                            border: '5px solid #1f701f'
                        }}
                        alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;