import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './project.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    return (
        <div>
            <h2>All of my projects</h2>
            <Grid container spacing={2}>
                {
                    projects.map(project => {
                        const { title, picture, description, id, liveSite, clientCode, serverCode } = project;
                        return (
                            <Grid item xs={12} md={4} key={id}>
                                <Card sx={{ maxWidth: 345 }} className="project-card">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={picture}
                                            alt={title}
                                        />
                                        <CardContent sx={{ background: '#1a1a1a', color: 'white' }}>
                                            <Typography gutterBottom variant="h5" sx={{ fontWeight: 'bold' }} component="div">
                                                {title}
                                            </Typography>
                                            <Typography variant="body2">
                                                {description}
                                            </Typography>
                                            <Box className="project-btn-container">
                                                <a href={liveSite} target="_blank"><Button className="project-btn">Live Site</Button></a>
                                                <NavLink to={`/projectDetails/${id}`}><Button className="project-btn">Details</Button></NavLink>
                                                {/* <a href={clientCode} target="_blank"><Button className="project-btn">Client Code</Button></a>
                                                <a href={serverCode} target="_blank"><Button className="project-btn">Server Code</Button></a> */}
                                            </Box>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    );
};

export default Projects;