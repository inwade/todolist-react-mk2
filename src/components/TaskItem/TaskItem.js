import React from 'react';

import './TaskItem.css';

function TaskItem (props) {

    return (
        <li className="list-item" id={props.identifier} onDoubleClick={props.handleEdit}>
            <p>{props.tasktext}</p>
            <span onClick={props.handleDelete}> X </span>
        </li>
    )
}

export default TaskItem;