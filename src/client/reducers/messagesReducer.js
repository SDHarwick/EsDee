import { FETCH_MESSAGES_SUCCESS } from '../constants/actionType';

let initialState = {
  messages: {},
};

export default function(state, action) {
  state = state || initialState;
  
  switch (action.type) {
    case FETCH_MESSAGES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

