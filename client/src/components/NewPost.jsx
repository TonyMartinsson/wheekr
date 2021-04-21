import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

function NewPost() {
    const classes = useStyles(); 
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <div style={wheekContainer}>
                    <TextField id="standard-basic" label="New post" />
                    <Button size="medium" variant="contained" style={buttonStyle}>Wheek</Button>           
                </div>
            </form>            
        </div>
    )
}

const wheekContainer = {
  width: '80%',
  marginLeft: '5.9rem',
}

const buttonStyle = {
  background: 'green',
  color: 'white',
  margin: '1rem'
}

export default NewPost;