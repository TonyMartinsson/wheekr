import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import profilepic from '../assets/profilepic.png';

export default function UserPost(props) {
  console.log(props.post);
  const publishDate = new Date(props.post.timestamp);
  let month = (publishDate.getMonth() + 1);
  if (month < 10) {
    month = '0' + month;}
  const year = publishDate.getFullYear();
  let date = publishDate.getDate();
  if (date < 10) {
    date = '0' + date;}

  return (
    <div style={postContainer}>
      <div style={avatarContainer}>
        <img style={avatar} src={profilepic} alt="profile pic" />
      </div>
      <div>
        <div style={{ display: 'flex' }}>
          <p style={{ margin: '1rem' }}>{props.post.user}</p>
          <p style={{ margin: '1rem' }}>{year + "-" + month + "-" + date}</p>
          <IconButton edge="end" aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
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

const postContainer = {
  display: 'flex'
}

const avatarContainer = {
  display: 'flex',
  alignItems: 'flex-start'
}
const avatar = {
  display: 'flex',
  width: '4rem',
  borderRadius: '50%',
  margin: '0.5rem'
}