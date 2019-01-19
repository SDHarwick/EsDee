import axios from 'axios';
import {getToken} from '../utils/storageUtil';
// Import actionType constants
import {
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_FAILURE,
    FETCH_MESSAGE_SUCCESS,
    FETCH_MESSAGE_FAILURE,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAILURE
} from '../constants/actionType';




export const fetchMessagesSuccess = () => async dispatch => {
  const res = await axios.get('/api/messages', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer' + ' ' + getToken()
    }
  });

  dispatch({ type: FETCH_MESSAGES_SUCCESS, payload: res.data });
};


export function createSiteSuccess(data) {
    return {
        type: CREATE_MESSAGE_SUCCESS,
        data
    };
}

export function createSiteFailure(error) {
    return {
        type: CREATE_MESSAGE_FAILURE,
        error
    };
}

export function fetchSiteSuccess(data) {
    return {
        type: FETCH_MESSAGE_SUCCESS,
        data
    };
}

export function fetchSiteFailure(error) {
    return {
        type: FETCH_MESSAGE_FAILURE,
        error
    };
}

export function fetchSitesFailure(error) {
    return {
        type: FETCH_MESSAGES_FAILURE,
        error
    };
}
