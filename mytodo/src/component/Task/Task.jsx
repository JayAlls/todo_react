import { useEffect, useState } from "react";
import "./style.scss"
import TaskForm from "./TaskForm/TaskForm";

function Task({selectedCategory, tasks, onAddTask, category}) {
    const [completedTask, setCompletedTask] = useState([])

    
    const  handleCheckedTask = (taskId) => {
        if (!completedTask.includes(taskId)) {
            setCompletedTask([...completedTask, taskId])
        }
    }
    const  handleNoCheckedTask = (taskId) => {
        if (completedTask.includes(taskId)) {
            setCompletedTask(completedTask.filter((t) => t !== taskId))
        }
    }

    const filteredTasks = 
    selectedCategory === "" 
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);

    const uncompletedTask = filteredTasks.filter((task) => !completedTask.includes(task.id))
    const completedTasks = filteredTasks.filter((task) => completedTask.includes(task.id))
    
    // useEffect(() => {
    //     // console.log(selectedCategory);
    //     // console.log(filteredTasks);
    //     console.log(tasks);
    // }, [selectedCategory, filteredTasks, tasks])
        
    return (
        <div className="task-container">
            <TaskForm onAddTask={onAddTask} category={category}/>

            <h2>À faire</h2>
            {uncompletedTask && uncompletedTask.length > 0 ? (
                uncompletedTask.map((task) => (
                    <div key={task.id} className="task">
                        <input type="checkbox" checked={false} onChange={() => handleCheckedTask(task.id)} />
                        <p>{task.name}</p>
                        <p>{task.category}</p>
                        <p>{task.priority}</p>
                        <p>{task.deadline}</p>
                    </div>
                ))
            ) : (
                <p>No task available</p>
            )}

            <h2>Terminé</h2>
            
            <div className="completed-task">
                {completedTasks && completedTasks.length > 0 ? (
                    completedTasks.map((task) => (
                        <div key={task.id} className="task" >
                            <input type="checkbox" checked={true} onChange={() => handleNoCheckedTask(task.id)} />
                            <p>{task.name}</p>
                            <p>{task.category}</p>
                            <p>{task.priority}</p>
                        </div>
                    ))
                ) : (
                    <p>Pas de tâche terminées</p>
                )}
            </div>
        </div>
    )
}

export default Task