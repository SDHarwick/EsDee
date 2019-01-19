import {
    ENTITY_CREATE,
    ENTITY_UPDATE,
    ENTITY_FETCH,
    SELECT_ENTITY_ITEM,
    ENTITY_DELETE,
    CLEAR_ENTITY_LIST
} from '../constants/actionType';


let initialState = {
    sites: {},
    products: [],
    selectedItem: {
        product: {},
    }
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
    state = state || initialState;
    let newState;

    switch (action.type) {
        case ENTITY_CREATE:
            newState[action.entity] = Object.assign({}, state, action.data);
            return newState;

        case ENTITY_UPDATE:
            newState[action.entity] = Object.assign({}, state, action.data);
            return newState;

        case ENTITY_FETCH:
            newState[action.entity] = Object.assign({}, state, action.data);
            return newState;

        case ENTITY_DELETE:
            const data = Object.assign({}, state);
            newState[action.entity] = data.filter(data => data.id !== action.data.id);
            return newState;

        case SELECT_ENTITY_ITEM:
            newState.selectedItem[action.entity] = Object.assign({}, state, action.data);
            return newState;

        case CLEAR_ENTITY_LIST:
            newState[action.entity] = {};
            return newState;

        default:
            return state;
    }
}


// // Import custom components
// import {LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_SUCCESS} from '../constants/actionType';

// var initialState = {
//     token: null,
//     isAuthenticated: false,
//     isLoading: false
// };

// /**
//  * A reducer takes two arguments, the current state and an action.
//  */
// export default function (state, action) {
//     state = state || initialState;

//     switch (action.type) {
//         case LOG_IN_SUCCESS:
//             return Object.assign({}, state, {
//                 isAuthenticated: true,
//                 isLoading: false,
//                 token: action.data,
//             });

//         case LOG_IN_FAILURE:
//             return Object.assign({}, state, {
//                 isAuthenticated: false,
//                 isLoading: false,
//                 token: null,
//             });

//         case LOG_OUT_SUCCESS:
//             return Object.assign({}, state, {
//                 isAuthenticated: false,
//                 isLoading: true,
//                 token: null,
//             });

//         default:
//             return state;
//     }
// }