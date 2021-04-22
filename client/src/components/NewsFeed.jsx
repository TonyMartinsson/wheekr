import React, { Component } from 'react';
import { Container } from '@material-ui/core';
//import { makeStyles, createStyles} from '@material-ui/core/styles';
import UserPost from './UserPost';
import List from '@material-ui/core/List';
import NewPost from './NewPost';
import axios from 'axios';


// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(2),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//     item: {
//       display: 'flex',
//       justifyContent: 'center'
//     }
//   }),
// );

class NewsFeed extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        posts: []
      };
    }
  
    componentDidMount() {
      axios
        .get('http://localhost:3000/api/posts')
        .then(res => {
          this.setState({
            posts: res.data
          })
        })
        .catch(err =>{
          console.log('Error');
        })
    };
  
  
    render() {
      const posts = this.state.posts;
      console.log("PrintBook: " + posts);
      let postList;
  
      if(!posts) {
        postList = "No posts!";
      } else {
        postList = posts.map((post, k) =>
          <UserPost post={post} key={k} />
        );
        console.log(postList);
      } 
    


    return (
        <div>
          <Container maxWidth="md">
            <NewPost/>
          <List>
            {postList}
             <UserPost/>
             <UserPost/>
             <UserPost/>
             </List>
          </Container>
        </div>
      );
    } 
}

export default NewsFeed;