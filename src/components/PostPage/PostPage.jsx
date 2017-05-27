import React, {Component} from 'react'
import Post from '../Post/Post.jsx'

export default class PostPage extends Component {
  constructor() {
    super();
    this.state = {postData: null}
  }

  componentDidMount() {
    fetch('/public/generated_post.json')
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Server response wasn't ok");
      })
      .then((responseData) => {
        this.setState({ postData: responseData });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  generateFullPost() {
    if (!this.state.postData) {
      return <span>Post not found</span>
    }
    const {post} = this.state.postData;
    return (
      <Post
        id={post.id}
        title={post.title}
        content={post.content}
        author={post.author}
        created={post.created}
        updated={post.updated}
        likes={post.likes}
        isLiked={post.isLiked}
        onPostLike={(postId, changedState) => this.onPostLike(postId, changedState)}
      />
    )
  }

  generatePostComments() {
    if (!this.state.postData) {
      return null;
    }
    return this.state.postData.comments.map(comment => (
      <span key={comment.id}>Comment</span>
    ))
  }

  render() {
    return (
      <div>
        {this.generateFullPost()}
        {this.generatePostComments()}
      </div>
    )
  }
}