import axios from 'axios';
import {getToken} from '../utils/storageUtil';
// Import actionType constants
import {
    CREATE_SITE_SUCCESS,
    CREATE_SITE_FAILURE,
    FETCH_SITE_SUCCESS,
    FETCH_SITE_FAILURE,
    FETCH_SITES_SUCCESS,
    FETCH_SITES_FAILURE
} from '../constants/actionType';




export const fetchSitesSuccess = () => async dispatch => {
  const res = await axios.get('/api/sites', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer' + ' ' + getToken()
    }
  });

  dispatch({ type: FETCH_SITES_SUCCESS, payload: res.data });
};


export function createSiteSuccess(data) {
    return {
        type: CREATE_SITE_SUCCESS,
        data
    };
}

export function createSiteFailure(error) {
    return {
        type: CREATE_SITE_FAILURE,
        error
    };
}

export function fetchSiteSuccess(data) {
    return {
        type: FETCH_SITE_SUCCESS,
        data
    };
}

export function fetchSiteFailure(error) {
    return {
        type: FETCH_SITE_FAILURE,
        error
    };
}

export function fetchSitesFailure(error) {
    return {
        type: FETCH_SITES_FAILURE,
        error
    };
}
