import React from 'react';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


function UserCard(props) {
    const { username, access, _id } = props.user
    const [accessType, setAccessType] = React.useState(access);
    const deleteUser = () => {
        axios
          .delete(`/api/users/${_id}`)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.error(err)
          }) 
        props.reload()
    }      

    const onRadioChange = (event) => {
        setAccessType(event.target.value)
        console.log(accessType)
        const userToUpdate = { _id: _id, access: event.target.value }
        console.log(userToUpdate)
            axios
            
           .put('/api/users/', userToUpdate)
           .then(res => {
             console.log(res)
           })
           .catch(err => {
             console.error(err)
           })
                     
         props.reload()    
    };

    console.log(access)

    return(
        <div>
        <Divider style={{ margin: '1rem' }}/>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <h4>{username}</h4>
            </Grid>
            <Grid item xs={4}>
                {/* <p>{access}</p> */}
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="gender" name="gender1" value={accessType} onChange={onRadioChange}>
                            <FormControlLabel value="user" control={<Radio />} label="User" />
                            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                        </RadioGroup>
                    </FormControl>
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