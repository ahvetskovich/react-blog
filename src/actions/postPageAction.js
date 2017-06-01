import {
  GET_POST_PAGE_REQUEST,
  GET_POST_PAGE_SUCCESS,
  GET_POST_PAGE_FAIL,
  POST_PAGE_CHANGE_LIKE_STATE,
  POST_PAGE_CHANGE_COMMENT_LIKE_STATE
} from '../constants/PostPage'

export function getPostPage(postId) {
  return (dispatch) => {
    dispatch({
      type: GET_POST_PAGE_REQUEST,
      postId: postId
    });

    // add setTimeout for testing
    // parseInt(props.match.params.postId, 10)
    fetch(`/public/generated_post_${postId}.json`)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Server response wasn't ok");
      })
      .then((postData) => {
        dispatch({
          type: GET_POST_PAGE_SUCCESS,
          postData: postData
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_POST_PAGE_FAIL,
          error: error
        });
      });
  }
}

export function postLike(postId, changedStateIsLiked) {
  return (dispatch) => {
    dispatch({
      type: POST_PAGE_CHANGE_LIKE_STATE,
      changedStateIsLiked: changedStateIsLiked,
      postId: postId
    });
  }
}

export function commentLike(commentId, changedStateIsLiked) {
  return (dispatch) => {
    dispatch({
      type: POST_PAGE_CHANGE_COMMENT_LIKE_STATE,
      changedStateIsLiked: changedStateIsLiked,
      commentId: commentId
    });
  }
}