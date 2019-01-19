import {UPDATE_SITE_SUCCESS} from '../constants/actionType';

let initialState = {
  sites: {},
};

export default function (state, action) {
    state = state || initialState;

    switch (action.type) {
        case UPDATE_SITE_SUCCESS:
            return Object.assign({}, state, {
                approved_status: 1
            });
        default:
            return state;
    }
}