import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostPreview from '../PostPreview/PostPreview.jsx';
import { getPostStream, postLike } from '../../actions/postStreamAction'

import styles from './PostStream.css';

class PostStream extends Component {
  componentDidMount() {
    this.props.postStream(this.props.pageSize, this.props.pageNumber);
  }

  onPostLike(postId, changedStateIsLiked) {
    this.props.postLike(postId, changedStateIsLiked);
  }

  render() {
    const posts = this.props.postsData.map(postData =>
      (<PostPreview
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
        <div className={styles.posts}>
          {this.props.loading ?
          <span>Loading...</span> :
          posts.length > 0 ? posts : (<span>No posts</span>)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pageNumber: state.postStream.pageNumber,
    pageSize: state.postStream.pageSize,
    postsData: state.postStream.postsData,
    loading: state.postStream.loading,
    error: state.postStream.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    postStream: bindActionCreators(getPostStream, dispatch),
    postLike: bindActionCreators(postLike, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostStream)


