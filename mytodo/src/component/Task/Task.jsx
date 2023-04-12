import React from 'react';
import './style.scss';

function Task({ id, name, dueDate, priority, deleteTask, categories }) {
    return (
      <li key={id}>
        <input type="checkbox" />
        <span>{name}</span>
        <span>{dueDate}</span>
        <span>{priority}</span>
        <span>{categories}</span>
        <button onClick={() => deleteTask(id)}>X</button>
      </li>
    );
  }
  

export default Task;
