import {
  GET_POST_PAGE_REQUEST,
  GET_POST_PAGE_SUCCESS,
  GET_POST_PAGE_FAIL,
  POST_PAGE_CHANGE_LIKE_STATE,
  POST_PAGE_CHANGE_COMMENT_LIKE_STATE
} from '../constants/PostPage'

const initialState = {
  postData: null,
  loading: false,
};

export default function postPage(state = initialState, action) {
  switch (action.type) {
    case GET_POST_PAGE_REQUEST:
      return {
        ...state,
        postData: null,
        loading: true
      };

    case GET_POST_PAGE_SUCCESS:
      return {
        ...state,
        postData: action.postData,
        loading: false
      };

    case GET_POST_PAGE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
      // TODO: change only like, not whole data
      // TODO: improve postData1, postData2 (same scope)
    case POST_PAGE_CHANGE_LIKE_STATE:
      const postData1 = {...state.postData};
      const {post} = postData1;
      if (post.id === action.postId) {
        post.isLiked = action.changedStateIsLiked;
        post.likes = action.changedStateIsLiked ? post.likes + 1 : post.likes - 1;
      }
      return {
        ...state,
        postData: postData1,
        loading: false
      };

    case POST_PAGE_CHANGE_COMMENT_LIKE_STATE:
      const postData2 = {...state.postData};
      const {comments} = postData2;
      comments.forEach(comment => {
          if (comment.id === action.commentId) {
            comment.isLiked = action.changedStateIsLiked;
            comment.likes = action.changedStateIsLiked ? comment.likes + 1 : comment.likes - 1;
          }
        }
      );
      return {
        ...state,
        postData: postData2,
        loading: false
      };

    default:
      return state;
  }

}