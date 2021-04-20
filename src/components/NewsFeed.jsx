import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles, createStyles} from '@material-ui/core/styles';

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
          <Container maxWidth="lg">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita assumenda labore autem nemo iusto numquam, non laboriosam mollitia ipsum cumque dolorem fugiat velit iste molestias voluptate suscipit reprehenderit, perferendis accusantium!</p>
          </Container>
        </div>
      );
    } 
export default NewsFeed;