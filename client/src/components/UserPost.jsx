import React, { useContext } from 'react'
import UserContext from './contexts/UserContext'
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import axios from 'axios';
import '../css/userpost.css';

export default function UserPost(props) {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [wheek, setWheek] = React.useState(props.post.message);
  const publishDate = new Date(props.post.timestamp);
  let month = (publishDate.getMonth() + 1);
  if (month < 10) {
    month = '0' + month;}
  const year = publishDate.getFullYear();
  let date = publishDate.getDate();
  if (date < 10) {
    date = '0' + date;
  }
  const { user } = useContext(UserContext)

  const deletePost = () => {
      axios
        .delete(`/api/posts/${props.post._id}`)
        .then(res => {
          console.log(res)
          props.reload()
          //window.location.reload() 

          
        })
        .catch(err => {
          console.error(err)
          
        })      
  }

  const editPost = () => {
    const postToEdit = {
      id: props.post._id,
      message: wheek
    }


    axios
      .put('/api/posts/', postToEdit)
      .then(res => {
        console.log(res)
        props.reload()
      })   
      .catch(err =>{
        console.log("Edit post " + err);
      })   
    setOpenEdit(false)  
    console.log("id: " + postToEdit.id + " message: " + postToEdit.message)
  }

  const openEditModal = () => {   
    console.log("Visa wheek editor för " + wheek)
    setOpenEdit(true);
  }

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleWheekChange = (e) => {
    setWheek(e.target.value)    
  };

  //console.log("Skapar dialog med wheektext " )
  if(props.post.message!==wheek) {
    console.log("Ur synk, post.message=" + props.post.message +", wheek="+wheek)
  }

  return (
    <div className="postContainer">
      <div className="avatarContainer">
        <img className="avatar" src={`../avatar/${props.post.avatar}.jpg`} alt="profile pic" />
      </div>
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <p style={{ margin: '1rem' }}>{props.post.user}</p>
          <p style={{ margin: '1rem', marginRight: '3rem' }}>{year + "-" + month + "-" + date}</p>

          { user!== undefined && user.username === props.post.user ? (
            <>
          <IconButton edge="end" aria-label="edit" onClick={openEditModal}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={deletePost}>
            <DeleteIcon />
          </IconButton> </>
           ) : (<p></p>) }
          
        </div>
        <ListItem alignItems="center">
          <ListItemText
            secondary={props.post.message}
          />
        </ListItem>
        <Divider style={{ margin: '1rem' }} component="li" />
      </div>

      <Dialog open={openEdit} onClose={handleEditClose} aria-labelledby="form-dialog-login">
            <DialogTitle id="edit">Edit wheek</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="post"
                label="Edit wheek"
                type="text"
                onChange={handleWheekChange}
                defaultValue={props.post.message}
                fullWidth
                multiline
                />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleEditClose} color="primary">
                Go back
                  </Button>
              <Button onClick={editPost} variant="contained" color="primary">
                Submit
                  </Button>
            </DialogActions>
          </Dialog>
    </div>
  );
}