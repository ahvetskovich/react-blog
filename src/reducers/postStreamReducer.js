import { GET_POST_STREAM } from '../constants/PostStream'

const initialState = {
  year: 2016,
  photos: [],
  loading: false
}

export default function postStream(state = initialState, action) {

  switch (action.type) {
    case GET_POST_STREAM_REQUEST:
      return {
        ...state,
        pageNumber: action.pageNumber,
        pageSize: action.pageSize,
        loading: action.loading
      };

    default:
      return state;
  }

}