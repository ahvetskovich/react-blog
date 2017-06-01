import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import styles from './Comment.css';
import {Link} from 'react-router-dom'
import Like from '../Like/Like.jsx'


const Comment = (props) =>
  // constructor(props) {
  //   super(props);
  //   // this.handleLikeClick = this.handleLikeClick.bind(this);
  //   // this.state = {isLoggedIn: false};
  // }

  (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Link to={`/authors/${props.author.id}`}>
          <img src={props.author.avatar} className={styles.avatar_image} alt="user_avatar"/>
        </Link>
      </div>
      <div className={styles.body}>
        <Link to={`/authors/${props.author.id}`}>
          <span className={styles.author_name}>
            {props.author.name}
          </span>
        </Link>
        <div>
          <span className={styles.content}>
            {props.content}
          </span>
        </div>
        <div className={styles.action_panel}>
          <Like
            onLike={props.onCommentLike.bind(null, props.id, !props.isLiked)}
            likes={props.likes}
            isLiked={props.isLiked}>
          </Like>
          <span> · </span>
          <button
            disabled="disabled" // no reply feature
            className={classnames(styles.reply_btn, styles.disabled_btn)}>
            Reply
          </button>
          <div>
            <span className={styles.created}>
              {moment(props.created).format('D MMMM YYYY [в] H:mm')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

Comment.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Comment;
