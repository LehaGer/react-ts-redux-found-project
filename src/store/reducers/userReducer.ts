import {ActionTypes, userAction, userStateProps} from "../../types/user";

export const defaultState: userStateProps = {
    users: [],
    loading: false,
    error: null
};

export const userReducer = (state: userStateProps = defaultState, action: userAction): userStateProps => {

    switch (action.type) {

        case ActionTypes.FETCH_USER:
            return {
                users: [],
                loading: true,
                error: null
            };
        case ActionTypes.FETCH_USER_SUCCESS:
            return {
                users: action.payload,
                loading: false,
                error: null
            };
        case ActionTypes.FETCH_USER_ERROR:
            return {
                users: [],
                loading: false,
                error: action.payload
            };
        default:
            return state;

    }

};