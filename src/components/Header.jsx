import React from 'react';
import ProfileCard from './ProfileCard';
import Button from '@material-ui/core/Button';
// import { Typography } from '@material-ui/core';
import logo from '../assets/wheekrlogo.png';

function Header() { 
    return (
        <div style={headerStyle}>
            <img style={logoStyle} src={logo} alt="Logo" />
            <div style={buttonContainer}>
                <Button size="medium" variant="contained" style={buttonStyle}>LOGIN</Button>
                <Button size="medium" variant="contained" style={buttonStyle}>SIGNUP</Button>
            </div>
            <ProfileCard/>
        </div>
    )
}
                        
const headerStyle = {
    background: 'linear-gradient(90deg, rgba(1,182,8,1) 0%, rgba(9,121,17,1) 60%, rgba(6,80,8,1) 100%)',
    height: '7rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const logoStyle = {
    height: '5rem',
    marginLeft: '1rem'
}

const buttonContainer = {
    display: 'flex'
}

const buttonStyle = {
    color: 'green',
    margin: '1rem'
}

export default Header;