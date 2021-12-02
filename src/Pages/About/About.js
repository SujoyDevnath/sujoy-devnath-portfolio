import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Typewriter } from 'react-simple-typewriter'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import React, { useEffect, useState } from 'react';

const About = () => {

    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch('./skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    return (
        <Container>
            {/* About Myself Section */}
            <Box sx={{ pb: 5, borderTop: '1px solid green' }}>
                <Typography variant="h4" sx={{ mb: 5, textAlign: 'center', borderBottom: '1px solid green', width: '50%', mx: 'auto', py: 2 }}>About Me</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Hi, There</Typography>
                        <Typography variant="h4" sx={{ my: 3, fontWeight: 'bold' }}>
                            <span>I'm</span>
                            <span style={{ color: '#1f701f', marginLeft: '15px' }}>
                                <Typewriter
                                    words={['Web Developer', 'Mern Stack Developer', 'Backend Developer']}
                                    loop={false}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </Typography>
                        <Typography variant="h5">
                            Hi, I'm Sujoy Devnath. I'm a high school student. I have learned the basics of Web Development. I'm currently seeking an internship or junior full-stack web development job. I'm a quick learner and I like to learn and apply new things. I always enjoy teamwork.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ borderLeft: '3px solid green', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ ml: 3 }}>
                            <Typography variant="h5" sx={{ mb: 1 }}>Age: <span style={{ color: 'green' }}>15+</span></Typography>
                            <Typography variant="h5" sx={{ mb: 1 }}>Location: <span style={{ color: 'green' }}>Chottogram, Bangladesh</span></Typography>
                            <Typography variant="h5" sx={{ mb: 1 }}>Education: <span style={{ color: 'green' }}>(2020-Running) SSC Examinee</span></Typography>
                            <Typography variant="h5" sx={{ mb: 1 }}>Email: <span style={{ color: 'green' }}>sujoydevnathdipta@gmail.com</span></Typography>
                            <Typography variant="h5" sx={{ mb: 1 }}>Phone: <span style={{ color: 'green' }}>+8801815205063</span></Typography>
                            <Typography variant="h5" sx={{ mb: 1 }}>Post: <span style={{ color: 'green' }}>Mern Stact Developer</span></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* Skills Section */}
            <Box sx={{ mt: 5, borderTop: '1px solid green' }}>
                <Typography variant="h4" sx={{ textAlign: 'center', borderBottom: '1px solid green', width: '50%', mx: 'auto', py: 2 }}>My Skills</Typography>
                <Grid container spacing={2} sx={{ my: 5 }}>
                    {skills.map(skill => {
                        const { name, percentage } = skill;
                        return (
                            <Grid item xs={12} md={4} sx={{ mt: 5, p: 5 }}>
                                <div style={{ width: 200, height: 200, textAlign: 'center', margin: 'auto' }}>
                                    <CircularProgressbar
                                        value={percentage}
                                        text={`${percentage}%`}
                                        styles={buildStyles({
                                            pathColor: `green`,
                                            textColor: 'green',
                                        })}
                                    />
                                    <Typography variant="h5" sx={{ mt: 2 }}>{name}</Typography>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Container>
    )
};

export default About;