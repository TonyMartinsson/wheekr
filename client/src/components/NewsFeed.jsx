import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import UserPost from './UserPost';
import List from '@material-ui/core/List';
import NewPost from './NewPost';
import axios from 'axios';
import UserContext from './contexts/UserContext'
class NewsFeed extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
    }
    static contextType = UserContext
  
    componentDidMount() {
      axios
        .get('/api/posts')
        .then(res => {
          this.setState({
            posts: res.data.reverse()
          })
      })
        .catch(err =>{
          console.log('Error');
        })
    };

    reload = () => {  
    this.componentDidMount();
    };
   
    render() {
      let { user } = this.context
      const posts = this.state.posts;
      let postList;
      if(!posts) {
        postList = "No posts!";
      } else {
        postList = posts.map((post, k) =>
          <UserPost post={post} key={k} reload={this.reload}/>
        );
      } 

    return (
        <div>
          <Container maxWidth="md">            
            {user? (
            <NewPost reload={this.reload}/>
            ):(<p>Please login to wheek!</p>)} 
            <List>
              {postList}
            </List>
          </Container>
        </div>
      );
    } 
}

export default NewsFeed;