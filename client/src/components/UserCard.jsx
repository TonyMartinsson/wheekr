import React from 'react';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

function UserCard(props) {
    const deleteUser = () => {
        axios
          .delete(`/api/users/${props.user._id}`)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.error(err)
          })      
    }
    const { username, access } = props.user

    return(
        <div>
        <Divider style={{ margin: '1rem' }}/>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <h4>{username}</h4>
            </Grid>
            <Grid item xs={4}>
                <p>{access}</p>
            </Grid>
            <Grid item xs={4}>
                <IconButton edge="end" aria-label="edit" onClick={deleteUser}>
                    <DeleteIcon/>
                </IconButton>          
            </Grid>
        </Grid>
            
        </div>
    )}

export default UserCard;