import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './Comment.css';


const Comment = props =>
  // constructor(props) {
  //   super(props);
  //   // this.handleLikeClick = this.handleLikeClick.bind(this);
  //   // this.state = {isLoggedIn: false};
  // }

  (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={props.author.avatar} className={styles.avatar_image} alt="user_avatar" />
      </div>
      <div className={styles.body}>
        <span className={styles.author_name}>
          {props.author.name}
        </span>
        <div>
          <span className={styles.content}>
            {props.content}
          </span>
        </div>
        <div className={styles.action_panel}>
          <button className={styles.like_btn}>
            Like
          </button>
          <span> · </span>
          <button className={styles.reply_btn}>
            Reply
          </button>
          <span> · </span>
          {props.likes ?
            <span>
              <span>
                <i className={styles.facebook_like_icon} />
                {props.likes}
              </span>
              <span> · </span>
            </span>
            : null
          }
          <span className={styles.created}>
            {moment(props.created).format('YYYY-MM-DD HH:mm')}
          </span>
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
