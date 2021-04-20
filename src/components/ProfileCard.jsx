import { Typography } from '@material-ui/core';
import React from 'react';
import profilepic from '../assets/profilepic.png';
import Button from '@material-ui/core/Button';

function ProfileCard() {   
    return (
        <div style={profileContainer}>
            <Typography>Username</Typography>
            <img style={profileStyle} src={profilepic} alt="profile pic" />
            <Button size="small" variant="contained" color="primary">
            Log Out
          </Button>
        </div>
    )    
}

const profileContainer = {
    display: 'flex',
    alignItems: 'flex-end'
}

const profileStyle = {
    width: '3rem',
    margin: '0 1rem'   
}

export default ProfileCard;