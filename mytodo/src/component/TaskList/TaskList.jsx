import React from 'react';
import Task from '../Task/Task';


function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task 
        key={task.id}
        id={task.id}
        name={task.name}
        dueDate={task.dueDate}
        priority={task.priority}
        deleteTask={deleteTask}/>
      ))}
    </div>
  );
}

export default TaskList;

