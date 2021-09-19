import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TaskComponent: FC = () => {

    const taskState = useTypedSelector(state => state.task);

    const {fetchTasks, setTaskPage} = useActions();

    useEffect(() => {
        fetchTasks(taskState.page, taskState.limit);
    }, [taskState.page]);

    const pages = [1,2,3,4,5];

    if(taskState.loading) {
        return (
            <h1>
                Loading...
            </h1>
        )
    }

    if(taskState.error) {
        return (
            <h1>
                {taskState.error}
            </h1>
        )
    }

    return (
        <div>
            {taskState.tasks.map(task =>
                <div key={task.id}>
                    {task.id} - {task.title}
                </div>
            )}
            <div style={{display: "flex"}}>
                {pages.map(page =>
                    <div
                        key={page}
                        onClick={() => setTaskPage(page)}
                        style={{border: page === taskState.page ? "2px solid green" : "1px solid gray", padding: "10px"}}>
                        {page}
                    </div>
                )}
            </div>

        </div>
    );
};

export default TaskComponent;