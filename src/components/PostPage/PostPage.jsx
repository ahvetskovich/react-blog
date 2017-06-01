import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostPreview from '../PostPreview/PostPreview.jsx';
import Comment from '../Comment/Comment.jsx';
import { getPostPage, postLike, commentLike } from '../../actions/postPageAction'
import styles from './PostPage.css'

class PostPage extends Component {
  componentWillMount() {
    this.props.getPostPage(this.props.match.params.postId);
  }

  onPostLike(postId, changedStateIsLiked) {
    this.props.postLike(postId, changedStateIsLiked, this.props.postData);
  }

  onCommentLike(commentId, changedStateIsLiked) {
    this.props.commentLike(commentId, changedStateIsLiked, this.props.postData);
  }

  generateFullPost() {
    if (this.props.loading) {
      return <span>Loading...</span>
    }

    if (!this.props.postData) {
      return null;
    }

    const {post} = this.props.postData;
    return (
      <PostPreview
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
    if (!this.props.postData) {
      return null;
    }
    const comments = this.props.postData.comments.map(comment =>
      (<Comment
        key={comment.id}
        id={comment.id}
        content={comment.content}
        postId={comment.postId}
        author={comment.author}
        created={comment.created}
        updated={comment.updated}
        likes={comment.likes}
        isLiked={comment.isLiked}
        onCommentLike={(commentId, changedState) => this.onCommentLike(commentId, changedState)}
      />
    ));
    return (
      <div>
        <h2 className={styles.comments_count}>Comments ({comments.length})</h2>
        {comments}
      </div>
    );
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

function mapStateToProps(state) {
  return {
    postData: state.postPage.postData,
    loading: state.postPage.loading,
    error: state.postPage.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPostPage: bindActionCreators(getPostPage, dispatch),
    postLike: bindActionCreators(postLike, dispatch),
    commentLike: bindActionCreators(commentLike, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)