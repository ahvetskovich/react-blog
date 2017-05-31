import {
  GET_POST_STREAM_REQUEST,
  GET_POST_STREAM_SUCCESS,
  GET_POST_STREAM_FAIL,
  POST_CHANGE_LIKE_STATE
} from '../constants/PostStream'

const initialState = {
  postsData: [],
  loading: false,
  pageNumber: 1,
  pageSize: 3
};

export default function postStream(state = initialState, action) {
  switch (action.type) {
    case GET_POST_STREAM_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_POST_STREAM_SUCCESS:
      return {
        ...state,
        postsData: action.postsData,
        loading: false
      };

    case GET_POST_STREAM_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };

    case POST_CHANGE_LIKE_STATE:
      const postsData = [...state.postsData].map(post => {
          if (post.id === action.postId) {
            post.isLiked = action.changedStateIsLiked;
            post.likes = action.changedStateIsLiked ? post.likes + 1 : post.likes - 1;
          }
          return post;
        }
      );
      return {
        ...state,
        postsData,
        loading: false
      };

    default:
      return state;
  }

}