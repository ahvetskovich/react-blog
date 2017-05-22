import React from 'react';
import PropTypes from 'prop-types';
import styles from './Post.css';


const Post = props =>
  // constructor(props) {
  //
  // super(props);
  // this.handleLikeClick = this.handleLikeClick.bind(this);
  // this.state = {isLoggedIn: false};
  // }

  // render() {
  (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.author_name}>
          Author: {props.author.name}
        </div>
        <div className={styles.title}>
          Header: {props.header}
        </div>
        <div className={styles.time_published}>
          Created:{props.created}
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          {props.content}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.voting}>
          Likes: {props.likes}
        </div>
      </div>
    </div>
  );

Post.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  header: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Post;
