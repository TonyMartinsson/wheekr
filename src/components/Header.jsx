import React from 'react';
import ProfileCard from './ProfileCard';
import Button from '@material-ui/core/Button';
import logo from '../assets/wheekrlogo.png';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';

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
                fullWidth
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                multiline
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleLoginClose} color="primary">
                Go back
                  </Button>
              <Button disabled variant="contained" color="primary">
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
                fullWidth
              />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                multiline
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSignupClose} color="primary">
                Go back
                  </Button>
              <Button disabled variant="contained" color="primary">
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