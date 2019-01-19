import axios from 'axios';
import {getToken} from '../utils/storageUtil';
// Import actionType constants
import {
    UPDATE_SITE_SUCCESS
} from '../constants/actionType';




export const approveListing = (id) => async dispatch => {
  const body = {approved_status: 1};
  const res = await axios.put('/api/sites/' + id, body, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer' + ' ' + getToken()
    }
  });

  dispatch({ type: UPDATE_SITE_SUCCESS, payload: res.data });
};

