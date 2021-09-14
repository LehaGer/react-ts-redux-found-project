export interface userStateProps {
    users: IUser[];
    loading: boolean;
    error: null | string;
}

export interface IUser {
    id: number
    name: string;
    surname: string;
    email?: string
}

export enum ActionTypes {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR"
}

export interface actionFetchUser {
    type: ActionTypes.FETCH_USER
}

export interface actionFetchUserSuccess {
    type: ActionTypes.FETCH_USER_SUCCESS,
    payload: IUser[]
}

export interface actionFetchUserError {
    type: ActionTypes.FETCH_USER_ERROR,
    payload: string
}

export type userAction =  actionFetchUser | actionFetchUserSuccess | actionFetchUserError;
