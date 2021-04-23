import React from 'react';
import ProfileCard from './ProfileCard';
import logo from '../assets/wheekrlogo.png';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) =>
  createStyles({
    logoSize: {
      padding: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(0.5)',
      },
      [theme.breakpoints.up('sm')]: {
        transform: 'scale(0.75)',
      },
      [theme.breakpoints.up('md')]: {
        transform: 'scale(1.0)',
      },
    },
  }),
);

function Header() { 
    const classes = useStyles();
    const [openLogin, setOpenLogin] = React.useState(false);
    const [openSignup, setOpenSignup] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLoginClose = () => {
        setOpenLogin(false);
    };

    function openLoginModal() {
        setOpenLogin(true);
    }

    const handleSignupClose = () => {
        setOpenSignup(false);
    };

    function openSignupModal() {
        setOpenSignup(true);
    }

    const signup = ()=> {
      const newUser = {
        username: username,
        password: password
      }
      console.log(newUser)
      axios
        .post('http://localhost:3000/api/users/register', newUser)
        .then(res => {
          console.log(res)
          setPassword('')
          setUsername('')
          setOpenSignup(false);
          })

    }

    const login = ()=> {
      const user = {
        username: username,
        password: password
      }
      console.log(user)
      axios
        .post('http://localhost:3000/api/users/login', user)
        .then(res => {
          console.log(res)
          setPassword('')
          setUsername('')
          setOpenLogin(false);
          localStorage.setItem('LoggedInUser', JSON.stringify(user.username))
          })
      // hämta värden från inputfält
      // fetch
      // spara inloggad användare i LS
    }

    const handleSignupUsername = (e) => {
      setUsername(e.target.value)
      console.log(username)
    }
    const handleSignupPassword = (e) => {
      setPassword(e.target.value)
      console.log(password)
    }

    const handleLoginUsername = (e) => {
      setUsername(e.target.value)
      console.log(username)
    }
    const handleLoginPassword = (e) => {
      setPassword(e.target.value)
      console.log(password)
    }
    
    return (
      <div style={headerStyle}>
        <Link to="/" >
          <img style={logoStyle} className={classes.logoSize} src={logo} alt="Logo" />
        </Link>
        <div style={buttonContainer}>

            <Button size="medium" variant="contained" style={buttonStyle} onClick={openLoginModal}>LOGIN</Button>
            <Button size="medium" variant="contained" style={buttonStyle} onClick={openSignupModal}>SIGNUP</Button>

          <Dialog open={openLogin} onClose={handleLoginClose} aria-labelledby="form-dialog-login">
            <DialogTitle id="login">Login</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Username"
                type="text"
                onChange={handleLoginUsername}
                defaultValue={username}
                fullWidth
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                onChange={handleLoginPassword}
                defaultValue={password}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleLoginClose} color="primary">
                Go back
                  </Button>
              <Button onClick={login} variant="contained" color="primary">
                Submit
                  </Button>
            </DialogActions>
          </Dialog>

          <Dialog open={openSignup} onClose={handleSignupClose} aria-labelledby="form-dialog-signup">
            <DialogTitle id="signup">Signup</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Username"
                type="text"
                value={username}
                onChange={handleSignupUsername}
                fullWidth
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                multiline
                type="password"
                onChange={handleSignupPassword}
                value={password}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSignupClose} color="primary">
                Go back
                  </Button>
              <Button onClick={signup} variant="contained" color="primary">
                Register
                  </Button>
            </DialogActions>
          </Dialog>

        </div>
        <ProfileCard />
      </div>
    )
}
                        
const headerStyle = {
    background: 'linear-gradient(90deg, rgba(1,182,8,1) 0%, rgba(9,121,17,1) 60%, rgba(6,80,8,1) 100%)',
    height: '7rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const logoStyle = {
    height: '5rem',
    marginLeft: '1rem'
}

const buttonContainer = {
    display: 'flex',
    alignItems: 'flex-end'
}

const buttonStyle = {
    color: 'green',
    margin: '1rem'
}

export default Header;