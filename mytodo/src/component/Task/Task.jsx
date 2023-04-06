import React from 'react';
import './style.scss';

function Task({ id, name, dueDate, priority, deleteTask }) {
    return (
      <li key={id}>
        <input type="checkbox" />
        <span>{name}</span>
        <span>{dueDate}</span>
        <span>{priority}</span>
        <button onClick={() => deleteTask(id)}>Delete</button>
      </li>
    );
  }
  

export default Task;
