const initialState = {
  loading: false,
  posts: [],
  error: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS_STARTED":
      return {
        ...state,
        loading: true,
      };
    case "GET_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
      };
    case "GET_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
