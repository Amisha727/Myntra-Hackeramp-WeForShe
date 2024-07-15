import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBar = () => {
    return (
    <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
            Clothes Resell
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/add">Add Item</Button>
        </Toolbar>
    </AppBar>
    );
};

export default NavBar;
