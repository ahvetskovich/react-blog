import React, { Component } from 'react';
// import fetch from 'whatwg-fetch';
import Post from '../Post/Post.jsx';
import logo from '../../logo.svg';
import styles from './App.css';

class App extends Component {
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

  render() {
    const posts = this.state.postsData.map(postData =>
        (<Post
          key={postData.id}
          id={postData.id}
          header={postData.header}
          content={postData.content}
          author={postData.author}
          created={postData.created}
          updated={postData.updated}
          likes={postData.likes}
        />),
    );

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className={styles.Posts}>
          {posts.length > 0 ? posts : (<span>No posts</span>)}
        </div>
      </div>
    );
  }
}


export default App;
