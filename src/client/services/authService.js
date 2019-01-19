import axios from 'axios';

// Import custom actionType
import * as AuthAction from '../actions/authAction';

import {BASE_URL, API_URL} from '../config/config';
import {setToken, setUser, clearToken, clearUser} from '../utils/storageUtil';

export function login({email, password}) {

    return function (dispatch) {
        axios.post(API_URL + 'auth/login', {email, password}).then((response) => {

            dispatch(AuthAction.loginSuccess(response.data.token));

            setToken(response.data.token);
            setUser(response.data.id);

            window.location.href = BASE_URL + 'sites';
        })
            .catch((error) => {
                dispatch(AuthAction.loginFailure(error));
            });
    };
}

export function logout() {
    return function (dispatch) {

        clearToken();
        clearUser();

        dispatch(AuthAction.logoutSuccess());

        window.location.href = BASE_URL;
        return false;
        
    };
}

