import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Import custom components
import authReducer from './authReducer';
import sitesReducer from './sitesReducer';
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import messagesReducer from './messagesReducer';
import adminReducer from './adminReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    users: usersReducer,
    sites: sitesReducer,
    messages: messagesReducer,
    admin: adminReducer,
    form: formReducer  // ← redux-form
});

export default rootReducer;