import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles} from '@material-ui/core/styles';
import UserPost from './UserPost';
import List from '@material-ui/core/List';
import NewPost from './NewPost';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    item: {
      display: 'flex',
      justifyContent: 'center'
    }
  }),
);

function NewsFeed() { 
    const classes = useStyles(); 
    return (
        <div className={classes.root}>
          <Container maxWidth="md">
            <NewPost/>
          <List className={classes.root}>
             <UserPost/>
             <UserPost/>
             <UserPost/>
             </List>
          </Container>
        </div>
      );
    } 
export default NewsFeed;