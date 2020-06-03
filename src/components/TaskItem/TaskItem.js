import React from "react";

import "./TaskItem.css";

function TaskItem({ task, handleEdit, handleDelete }) {
  return (
    <li className="list-item" onDoubleClick={() => handleEdit(task)}>
      {!task.edit ? (
        <p>{task.value}</p>
      ) : (
        <input type="text" value={task.value} />
      )}
      <span onClick={handleDelete}> X </span>
    </li>
  );
}

export default TaskItem;
