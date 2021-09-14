import {taskAction, taskActionTypes, taskState} from "../../types/task";

const defaultTaskState: taskState = {
    tasks: [],
    loading: false,
    error: null
};

export const taskReducer = (state: taskState = defaultTaskState, action: taskAction): taskState => {

    switch (action.type) {

        case taskActionTypes.FETCH_TASK:
            return {
                tasks: [],
                loading: true,
                error: null
            };
        case taskActionTypes.FETCH_TASK_SUCCESS:
            return {
                tasks: [],
                loading: false,
                error: null
            };
        case taskActionTypes.FETCH_TASK_ERROR:
            return {
                tasks: [],
                loading: false,
                error: action.payload
            };
        default: return state;

    }

};