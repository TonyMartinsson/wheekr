import React from 'react';
import profilepic from '../assets/profilepic.png';
import Button from '@material-ui/core/Button';

function ProfileCard() {   
    return (
        <div style={profileContainer}>
                <div style={userNameStyle}>
                    <img style={profileStyle} src={profilepic} alt="profile pic" />
                    <p style={{color:'white'}}>USERNAME</p>
                    <Button size="small" variant="contained" style={buttonStyle}>LOG OUT</Button>
                </div>
        </div>
    )    
}

const profileContainer = {
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'center'
}

const profileStyle = {
    height: '3rem',
    margin: '0 1rem',   
    borderRadius: '50%'
}

const userNameStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const buttonStyle = {
    background: 'green',
    color: 'white',
    margin: '1rem'
  }

export default ProfileCard;