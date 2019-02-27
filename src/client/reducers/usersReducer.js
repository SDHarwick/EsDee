import { FETCH_USERS_SUCCESS, DELETE_USER_SUCCESS } from '../constants/actionType';

let initialState = {
  users: {}
};

export default function(state, action) {
  state = state || initialState;
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return action.payload;
    case DELETE_USER_SUCCESS:
      return Object.assign({}, state, {
          status: 1
      });
    default:
      return state;
  }
}