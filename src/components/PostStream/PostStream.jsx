import React, { Component } from 'react';
import Post from '../Post/Post.jsx';
import styles from './PostStream.css';

class PostStream extends Component {
  constructor(props) {
    super(props);
    this.state = { postsData: [] };
  }

  componentDidMount() {
    fetch('/public/generated_posts.json')
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Server response wasn't ok");
      })
      .then((responseData) => {
        this.setState({ postsData: responseData });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onPostLike(postId, changedStateIsLiked) {
    //Here is call of service method with saving like in db
    const newPostDataState = this.state.postsData;
    newPostDataState.forEach(post => {
        if (post.id === postId) {
          post.isLiked = changedStateIsLiked;
          post.likes = changedStateIsLiked ? post.likes + 1 : post.likes - 1
        }
      }
    );
    this.setState({postsData: newPostDataState})
  }

  render() {
    const posts = this.state.postsData.map(postData =>
      (<Post
        key={postData.id}
        id={postData.id}
        title={postData.title}
        content={postData.content}
        author={postData.author}
        created={postData.created}
        updated={postData.updated}
        likes={postData.likes}
        isLiked={postData.isLiked}
        onPostLike={(postId, changedState) => this.onPostLike(postId, changedState)}
      />)
    );

    return (
      <div className={styles.container}>
        <div className={styles.Posts}>
          {posts.length > 0 ? posts : (<span>No posts</span>)}
        </div>
      </div>
    );
  }
}


export default PostStream;
