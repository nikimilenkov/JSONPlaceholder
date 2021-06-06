import {
    FETCH_USER_DATA_REQUEST,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_FAIL,
    UPDATE_USER_DATA,
    FETCH_USER_POSTS_SUCCESS,
    FETCH_USER_POSTS_FAIL,
  } from "./constants";
  
  export const fetchUsersData = () => async (dispatch) => {
    dispatch({ type: FETCH_USER_DATA_REQUEST });
    
    const url = "https://jsonplaceholder.typicode.com/users";
  
    await fetch(url)
      .then((result) => result.json())
      .then((data) => dispatch({ type: FETCH_USER_DATA_SUCCESS, payload: data }))
      .catch((err) => dispatch({ type: FETCH_USER_DATA_FAIL, payload: err }));
  };
  
  export const fetchUsersPosts = (id) => async (dispatch) => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  
    await fetch(url)
      .then((result) => result.json())
      .then((posts) => dispatch({ type: FETCH_USER_POSTS_SUCCESS, id, posts }))
      .catch((err) => dispatch({ type: FETCH_USER_POSTS_FAIL, payload: err }));
  };
  
  export const updateUserData = (id, update) => (dispatch) => {
    dispatch({ type: UPDATE_USER_DATA, id, update });
  };
  