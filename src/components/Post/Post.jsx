import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import classnames from 'classnames'
import moment from 'moment'
import styles from './Post.css';

moment.locale('ru');

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
        <Link to={`/posts/${props.id}`}>
          <h1 className={styles.title}>
            {props.title}
          </h1>
        </Link>
        <div>
          <Link to={`/authors/${props.author.id}`}>
            <img className={styles.avatar} src={props.author.avatar}/>
            <span className={styles.author_info}>
              <div className={styles.author_name}>
                {props.author.name}
              </div>
              <div className={styles.time_published}>
                {moment(props.created).format('D MMMM YYYY [в] H:mm')}
              </div>
            </span>
          </Link>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.content}>
          {props.content}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.voting}>
          <i
            onClick={props.onPostLike.bind(null, props.id, !props.isLiked)}
            className={classnames(styles.like,
              {[`${styles.liked}`]: props.isLiked}
            )}
          />
          {props.likes}
        </div>
      </div>
    </div>
  );

Post.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  isLiked: PropTypes.bool
};

export default Post;
