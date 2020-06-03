import React from "react";
import TaskItem from "../TaskItem/TaskItem";

import "./TaskList.css";

function TaskList({ tasks, handleDelete, editor }) {
  return (
    <div className="tasklist-holder">
      <ul>
        {tasks.map((item) => (
          <TaskItem
            task={item}
            key={`task-${Date.now()}`}
            handleDelete={() => handleDelete(item.value)}
            handleEdit={editor}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
