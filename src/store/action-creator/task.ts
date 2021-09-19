import {Dispatch} from "redux";
import axios from "axios";
import {ITask, taskAction, taskActionTypes} from "../../types/task";

export const fetchTasks = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<taskAction>) => {
        try {
            dispatch({type: taskActionTypes.FETCH_TASK});
            const response = await axios.get<ITask[]>("https://jsonplaceholder.typicode.com/todos", {
                params: {
                    _page: page,
                    _limit: limit
                }
            });
            setTimeout(() => {
                dispatch({type: taskActionTypes.FETCH_TASK_SUCCESS, payload: response.data})
            }, 1500);
        } catch (e) {
            dispatch({
                type: taskActionTypes.FETCH_TASK_ERROR,
                payload: "Some error occurred on users loading"
            })
        }
    }
};

export const setTaskPage = (page: number): taskAction => {
    return {type: taskActionTypes.SET_TASK_PAGE, payload: page}
};