import {
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAIL,
  FETCH_USER_DATA_REQUEST,
  UPDATE_USER_DATA,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAIL,
} from "./constants";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_FAIL:
    case FETCH_USER_POSTS_FAIL:
      return { ...state, error: action.payload, status: "idle" };
    case FETCH_USER_DATA_REQUEST:
      return { ...state, status: "fetching" };
    case FETCH_USER_DATA_SUCCESS:
      return { ...state, users: action.payload, status: "done" };
    case FETCH_USER_POSTS_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === parseInt(action.id)
            ? { ...user, posts: action.posts }
            : user;
        }),
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, ...action.update } : user
        ),
      };
    default:
      return state;
  }
};
