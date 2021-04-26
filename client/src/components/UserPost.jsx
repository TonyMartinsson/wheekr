import React, { useContext } from 'react'
import UserContext from './contexts/UserContext'
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import profilepic from '../assets/profilepic.png';
import axios from 'axios';
import '../css/userpost.css';

export default function UserPost(props) {
  const publishDate = new Date(props.post.timestamp);
  let month = (publishDate.getMonth() + 1);
  if (month < 10) {
    month = '0' + month;}
  const year = publishDate.getFullYear();
  let date = publishDate.getDate();
  if (date < 10) {
    date = '0' + date;
  }
  const user = useContext(UserContext)

  const deletePost = () => {
    const postToDelete = {
      _id: props.post._id
    }
    console.log(postToDelete)
      axios
        .delete('/api/posts/', postToDelete)
        .then(res => {
          console.log(res)
        })      
  }
  const openEditModal = () => {   
  }

  return (
    <div className="postContainer">
      <div className="avatarContainer">
        <img className="avatar" src={profilepic} alt="profile pic" />
      </div>
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <p style={{ margin: '1rem' }}>{props.post.user}</p>
          <p style={{ margin: '1rem', marginRight: '3rem' }}>{year + "-" + month + "-" + date}</p>

          { user.name === props.post.user ? (
            <>
          <IconButton edge="end" aria-label="edit" onClick={openEditModal}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={deletePost}>
            <DeleteIcon />
          </IconButton> </>) : (<p></p>)}
          
        </div>
        <ListItem alignItems="center">
          <ListItemText
            secondary={props.post.message}
          />
        </ListItem>
        <Divider style={{ margin: '1rem' }} component="li" />
      </div>
    </div>
  );
}