import React, { Component } from 'react';
import UserCard from './UserCard';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
class UserAdministration extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        posts: [],
        users: []
      };
    }
  
    componentDidMount() {
    //   axios
    //     .get('/api/posts')
    //     .then(res => {
    //       this.setState({
    //         posts: res.data
    //       })
    //   })
    //     .catch(err =>{
    //       console.log('Error');
    //     })
    
        axios
        .get('/api/users')
        .then(res => {
            this.setState({
              users: res.data
            });
            console.log(res.data)
        })
          .catch(err =>{
            console.log('Error');
          })

    };

    render() {
        console.log(this.state.users)
        const users = this.state.users;
        const userList = users.map((user, k) =>
            <UserCard user={user} key={k} reload = {this.reload}/>
        );

        return(
            <div>
                <Container maxWidth="md">            
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