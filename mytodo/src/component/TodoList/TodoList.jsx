import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import "./style.scss"

import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskName, deadlines, category) => {
        const newTask = {
            id: uuidv4(),
            name: taskName,
            dedalines: deadlines,
            category: category,
        }

        setTasks([...tasks, newTask]);
    }



    return (
      <div className="todo">
       <TaskForm handleAddTask={addTask}/>
        {tasks.map((task) => (
            <div key={task.id}>
                {task.name} - {task.date} - {task.category}
            </div>
        ))}
      </div>
    );
}

export default TodoList;
