import React, { useContext } from 'react';
import profilepic from '../assets/profilepic.png';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import UserContext from './contexts/UserContext';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from "react-router-dom";

function ProfileCard() {  
    const user = useContext(UserContext)

    function refreshPage() {
        window.location.reload();
    }

    const logout = () => {
        axios
          .post('http://localhost:3000/api/users/logout')
          .then(res => {
            console.log(res)
            localStorage.removeItem('LoggedInUser')
            console.log('LS removed')
            refreshPage();
            })
    }

    axios
    .get(`/api/users/${user.name}`)
    .then(res => {
        console.log(res.data)
    })
      .catch(err =>{
        console.log('Error');
    })

    return (   
        <div style={profileContainer}>
                <div style={userNameStyle}>
                    <img style={profileStyle} src={profilepic} alt="profile pic" />
                    <p style={{color:'white'}}>{user.name}</p>
                    <Link to="/admin" style={{color: 'lightgray', marginLeft: '1rem'}}>
                        <SettingsIcon />
                    </Link>
                    <Button size="small" variant="contained" style={buttonStyle} onClick={logout}>LOG OUT</Button>
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