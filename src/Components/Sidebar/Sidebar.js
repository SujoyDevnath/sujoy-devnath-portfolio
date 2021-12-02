import React from 'react';
import Box from '@mui/material/Box';
import { Button, Divider, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Box sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        }}>
            <Toolbar />
            <Divider />
            <a
                style={{ width: '80%' }}
                href="https://drive.google.com/file/d/1tVVc3uHh0N0gXep7A2XG7180qb7BHXl3/view?usp=sharing"
                target="_blank">
                <Button sx={{ width: '100%' }} className="btn">Resume</Button>
            </a>
            <NavLink to="home" className="btn">
                <Button sx={{ color: 'white', height: '100%', width: '100%' }}>Home</Button>
            </NavLink>
            <NavLink to="about" className="btn">
                <Button sx={{ color: 'white', height: '100%', width: '100%' }}>About Me</Button>
            </NavLink>
            <NavLink to="projects" className="btn">
                <Button sx={{ color: 'white', height: '100%', width: '100%' }}>Projects</Button>
            </NavLink>
            <NavLink to="blogs" className="btn">
                <Button sx={{ color: 'white', height: '100%', width: '100%' }}>Blogs</Button>
            </NavLink>
            <NavLink to="contact" className="btn">
                <Button sx={{ color: 'white', height: '100%', width: '100%' }}>Contact</Button>
            </NavLink>
        </Box>
    );
};

export default Sidebar;