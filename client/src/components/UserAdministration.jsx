import React, { Component } from 'react';
import UserCard from './UserCard';
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Box from '@material-ui/core/Box';
class UserAdministration extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        users: []
      };
    }
  
    componentDidMount() {
        axios
        .get('/api/users')
        .then(res => {
            this.setState({
              users: res.data
            });
        })
          .catch(err =>{
            console.log(err);
          })

    };
    reload = () => {  
        this.componentDidMount();
        };
        
    render() {
        const users = this.state.users;
        const userList = users.map((user, k) =>
        <UserCard user={user} key={k} reload = {this.reload}/>
        );
        
        return(
            <div>
                <Container maxWidth="md"> 
                <Box align="center" p={4}>
                <Typography variant="h5" style={{ fontWeight: 600 }}>
                    User administration
                  </Typography>         
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <h4>Username</h4>
                        </Grid>
                        <Grid item xs={4}>
                            <h4>Change user type</h4>
                        </Grid>
                        <Grid item xs={4}>
                            <h4>Delete user</h4>
                        </Grid>
                    </Grid>
                    {userList}
                </Container>
            </div>
        );
    }
}

export default UserAdministration;