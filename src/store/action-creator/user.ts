import {Dispatch} from "redux";
import {ActionTypes, IUser, userAction} from "../../types/user";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({type: ActionTypes.FETCH_USER});
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
            setTimeout(() => {
                dispatch({type: ActionTypes.FETCH_USER_SUCCESS, payload: response.data})
            }, 1500);
        } catch (e) {
            dispatch({
                type: ActionTypes.FETCH_USER_ERROR,
                payload: "Some error occurred on users loading"
            })
        }
    }
}