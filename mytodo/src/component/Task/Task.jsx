import { useEffect, useState } from "react";
import "./style.scss"

function Task({selectedCategory, tasks}) {
    const [completedTask, setCompletedTask] = useState([])
    const [uncompletedTasks, setUncompletedTask] = useState(tasks)

    
    const  handleCheckedTask = (taskId) => {
        const taskIndex = uncompletedTasks.findIndex((task) => task.id === taskId);
        const task = uncompletedTasks[taskIndex]
        setUncompletedTask(uncompletedTasks.filter((task) => task.id !== taskId))
        setCompletedTask([...completedTask,task])
    }
    
    const filteredTasks = 
    selectedCategory === "" 
    ? uncompletedTasks
    : uncompletedTasks.filter((task) => task.category === selectedCategory);
    
    // useEffect(() => {
    //     // console.log(selectedCategory);
    //     // console.log(filteredTasks);
    //     console.log(tasks);
    // }, [selectedCategory, filteredTasks, tasks])
        
    return (
        <div className="task-container">
            <h2>À faire</h2>
            {filteredTasks && filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                    <div key={task.id} className="task">
                        <input type="checkbox" checked={completedTask.some((t) => t.id === task.id)} onChange={() => handleCheckedTask(task.id)} />
                        <p>{task.name}</p>
                    </div>
                ))
            ) : (
                <p>No task available</p>
            )}

            <h2>Terminé</h2>
            
            {completedTask.length > 0 ? (
                completedTask.map((task) => (
                  <div key={task.id} className="task">
                    <p>{task.name}</p>
                  </div>  
                ))
            ) : (
                <p>Pas tâches terminées</p>
            )}
        </div>
    )
}

export default Task