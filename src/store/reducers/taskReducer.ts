import {taskAction, taskActionTypes, taskState} from "../../types/task";

const defaultTaskState: taskState = {
    tasks: [],
    page: 1,
    limit: 10,
    loading: false,
    error: null
};

export const taskReducer = (state: taskState = defaultTaskState, action: taskAction): taskState => {

    switch (action.type) {

        case taskActionTypes.FETCH_TASK:
            return {
                ...state,
                loading: true
            };
        case taskActionTypes.FETCH_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: action.payload
            };
        case taskActionTypes.FETCH_TASK_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case taskActionTypes.SET_TASK_PAGE:
            return {
                ...state,
                page: action.payload
            };
        default: return state;

    }

};