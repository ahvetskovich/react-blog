import {
  GET_POST_STREAM_REQUEST,
  GET_POST_STREAM_SUCCESS,
  GET_POST_STREAM_FAIL,
  POST_CHANGE_LIKE_STATE
} from '../constants/PostStream'

export function getPostStream(pageSize, pageNumber) {
  return (dispatch) => {
    dispatch({
      type: GET_POST_STREAM_REQUEST,
      pageSize: pageSize,
      pageNumber: pageNumber
    });

    // add setTimeout for testing
    fetch('/public/generated_posts.json')
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Server response wasn't ok");
      })
      .then((responseData) => {
        let start = (pageNumber - 1) * pageSize;
        let end = start + pageSize;
        let pagedData = responseData.slice(start, end);
        dispatch({
          type: GET_POST_STREAM_SUCCESS,
          postsData: pagedData
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_POST_STREAM_FAIL,
          error: error
        });
      });
  }
}

export function postLike(postId, changedStateIsLiked) {
  return (dispatch) => {
    dispatch({
      type: POST_CHANGE_LIKE_STATE,
      changedStateIsLiked: changedStateIsLiked,
      postId: postId
    });
  }
}