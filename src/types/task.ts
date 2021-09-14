export interface ITask {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface taskState {
    tasks: ITask[]
    loading: boolean,
    error: string | null
}

export enum taskActionTypes {
    FETCH_TASK = "FETCH_TASK",
    FETCH_TASK_SUCCESS = "FETCH_TASK_SUCCESS",
    FETCH_TASK_ERROR = "FETCH_TASK_ERROR"
}

export interface actionFetchTask {
    type: taskActionTypes.FETCH_TASK,
    payload?: any
}

export interface actionFetchTaskSuccess {
    type: taskActionTypes.FETCH_TASK_SUCCESS,
    payload: ITask[]
}

export interface actionFetchTaskError {
    type: taskActionTypes.FETCH_TASK_ERROR,
    payload: string
}

export type taskAction =  actionFetchTask | actionFetchTaskSuccess | actionFetchTaskError;
