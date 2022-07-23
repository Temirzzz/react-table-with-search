import axios from "axios";

export const getPosts = () => {
  return (dispatch) => {
    dispatch(addPostsStarted());

    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, {
        completed: false,
      })
      .then((res) => {
        dispatch(addPostsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addPostsFailure(err.message));
      });
  };
};

const addPostsSuccess = (posts) => ({
  type: "GET_POSTS_SUCCESS",
  payload: [...posts],
});

const addPostsStarted = () => ({
  type: "GET_POSTS_STARTED",
});

const addPostsFailure = (error) => ({
  type: "GET_POSTS_FAILURE",
  payload: {
    error,
  },
});
