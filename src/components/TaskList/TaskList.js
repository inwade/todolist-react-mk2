import React from 'react';
import TaskItem from '../TaskItem/TaskItem';

import './TaskList.css';

function TaskList (props) {

    let taskItemsHolder = [];
    if (props.taskData.length > 0) {
    for (let i = 0; i < props.taskData.length; i++) {
        if (props.taskData !== '') {
        taskItemsHolder.push(<TaskItem tasktext={props.taskData[i]} 
            key={props.keys[i]}
            identifier={props.keys[i]} 
            handleDelete={props.handleDelete}
            handleEdit={props.editor}/>)
        }
    }
}

    return (
        <div className="tasklist-holder">
            <ul>
            {taskItemsHolder}
            </ul>
        </div>
    )
}

export default TaskList;