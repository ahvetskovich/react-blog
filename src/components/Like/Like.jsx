import React from 'react';
import styles from './Like.css'
import classnames from 'classnames'

const Like = (props) => {
  return (
    <div className={styles.voting}>
    <i
      onClick={props.onLike}
      className={classnames(styles.like,
        {[`${styles.liked}`]: props.isLiked}
      )}
    />
    {props.likes}
  </div>)
};

export default Like;
