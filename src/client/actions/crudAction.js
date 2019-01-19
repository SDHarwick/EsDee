import history from '../utils/history';

/**
 * Import all commonAction as an object.
 */
import * as commonAction from './commonAction';

/**
 * Import all httpService as an object.
 */
import * as httpService from '../services/httpService';

import {
    LOG_IN_SUCCESS
} from '../constants/actionType';
/**
 * CRUD actions for the application.
 * Every time an action that requires the API is called, it first dispatch an "apiRequest" action.
 *
 * entity = 'Product', 'Employee', ...
 */


export function fetchAll(entity) {
    return function (dispatch) {
        return httpService.fetchEntity(entity).then((response) => {
            dispatch(commonAction.list(entity, response.data));
            return response.data.data;
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
}

export function fetchById(entity, id) {
    return function (dispatch) {
        return httpService.fetchEntityById(entity, id).then((response) => {
            dispatch(commonAction.selectItem(entity, response.data));
            return response.data.data;
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
}

export function storeItem(entity, data) {
    return function (dispatch) {
        return httpService.storeEntity(entity, data).then((response) => {
            history.goBack();
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
}

export function updateItem(entity, data, id) {
    return function (dispatch) {
        return httpService.updateEntity(entity, data, id).then((response) => {
            history.goBack();
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
}

export function destroyItem(entity, id, data) {
    return function (dispatch) {
        return httpService.destroyEntity(entity, id).then((response) => {
            dispatch(fetchAll(entity, data));
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
}

export function submitForm(entity, data, id) {
    return function (dispatch) {
        if (id) {
            dispatch(updateItem(entity, data, id));
        } else {
            dispatch(storeItem(entity, data));
        }
    };
}

export function loginSuccess(data) {
    return {
        type: LOG_IN_SUCCESS,
        data
    };
}

export function submitSignUpForm(entity, data, id) {
    return function (dispatch) {
        if (id) {
            dispatch(updateItem(entity, data, id));
        } else {
            dispatch(storeItem(entity, data));
            dispatch(loginSuccess(data));
        }
    };
}