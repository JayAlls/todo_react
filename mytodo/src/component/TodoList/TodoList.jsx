import React, { useState } from "react";
import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { ...task, id: uuidv4() };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <TaskForm handleAddTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default TodoList;
