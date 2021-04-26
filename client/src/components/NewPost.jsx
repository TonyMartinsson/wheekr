import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import '../css/newpost.css';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 'auto',
      },
    },
  }),
);


export default function NewPost(props) {
    const [wheek, setWheek] = React.useState('');
    const classes = useStyles();  
    
    const handleWheek = () => {
      const user = localStorage.getItem('LoggedInUser')
      const newWheek = {
        user: user,
        message: wheek
      }
      axios
        .post('/api/posts', newWheek)
        .then(res => {
          console.log(res)
          setWheek('')
        })
        props.reload()
      }
    const handleWheekChange = (e) => {
      setWheek(e.target.value)
    }
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <div className="wheekContainer">
                    <TextField id="standard-basic" label="New post" onChange={handleWheekChange} value={wheek} />
                    <Button size="medium" onClick={handleWheek} variant="contained" style={buttonStyle}>Wheek</Button>           
                </div>
            </form>            
        </div>
    )
}

const buttonStyle = {
  background: 'green',
  color: 'white',
  margin: '1rem'
}