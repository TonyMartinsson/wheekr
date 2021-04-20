import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import profilepic from '../assets/profilepic.png';

export default function UserPost() {
  return (
    <div style={postContainer}>
      <div style={avatarContainer}>
        <img style={avatar} src={profilepic} alt="profile pic" />
      </div>
      <div>
        <div style={{ display: 'flex' }}>
          <p style={{ margin: '1rem' }}>Username</p>
          <p style={{ margin: '1rem' }}>Timestamp</p>
          <IconButton edge="end" aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
        <ListItem alignItems="center">
          <ListItemText
            secondary="Lorem ipsum dolor, sit amet consectetur adipisicing elit. In facere officiis quae ullam minus eum rem aliquam libero quisquam eius, expedita molestiae praesentium alias exercitationem iusto sunt saepe quis, voluptatum voluptatibus harum. Nulla, maxime consequatur! Ipsa, illo. Asperiores voluptas nostrum maiores esse rerum nihil minima, praesentium exercitationem quasi culpa magnam, amet, distinctio aut mollitia veniam pariatur sint corporis! Aliquam, assumenda. Dolorum excepturi sapiente, provident fuga maiores, quam vero alias tenetur iusto odio officia quia atque id. Veritatis dolorum similique error, commodi eum nihil quo ad magnam et quas itaque, dolor adipisci aliquid modi assumenda accusantium. Omnis alias officia numquam delectus."
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