import React from 'react';
import ProfileCard from './ProfileCard';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

function Header() { 
    return (
        <div style={headerStyle}>
            <Typography>Wheekr</Typography>
            <Button size="small" variant="contained" color="primary">
            Sign Up
            </Button>
            <Button size="small" variant="contained" color="primary">
            Log In
          </Button>
        <ProfileCard/>
        </div>
    )
}
                        
const headerStyle = {
    background: 'aqua',
    height: '6rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}

export default Header;