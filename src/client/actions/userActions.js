import axios from 'axios';
import {getToken, getUser } from '../utils/storageUtil';

import {
    FETCH_USER_SUCCESS,
    FETCH_USERS_SUCCESS,
    DELETE_USER_SUCCESS
} from '../constants/actionType';

export const handleToken = (token) => async dispatch => {
  let userId = getUser();
  const res = await axios.post('/api/stripe/'+userId, token);
    // bc FETCH_USER redux state updates- header updates
  dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
};


export const fetchUserSuccess = () => async dispatch => {
  let userId = getUser();
  const res = await axios.get('/api/users/'+userId, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer' + ' ' + getToken()
    }
  });

  dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
};



export const fetchUsersSuccess = () => async dispatch => {
  const res = await axios.get('/api/users', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer' + ' ' + getToken()
    }
  });

  console.log(res);

  dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
};



export const deleteUserSuccess = (id) => async dispatch => {
  const body = {status: 1};
  const res = await axios.put('/api/users/' + id, body, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer' + ' ' + getToken()
    }
  });

  dispatch({ type: DELETE_USER_SUCCESS, payload: res.data });
};