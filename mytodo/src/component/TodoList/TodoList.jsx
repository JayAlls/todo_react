import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import "./style.scss"

import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        const newTask = {...task, id: uuidv4()}

        setTasks([...tasks, newTask]);
    }



    return (
      <div className="todo">
       <TaskForm handleAddTask={addTask}/>
       <TaskList tasks={tasks}/> 
      </div>
    );
}

export default TodoList;
