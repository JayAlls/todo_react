import { useEffect, useState } from "react";
import "./style.scss"
import TaskForm from "./TaskForm/TaskForm";

function Task({selectedCategory, tasks, onAddTask, deleteTask, category}) {
    const [completedTask, setCompletedTask] = useState([]);

    useEffect(() => {
        const completedTasks = tasks.filter((task) => task.completed === true);
        setCompletedTask(completedTasks);
    }, [tasks])    
      
    
    const handleCheckedTask = (taskId) => {
        const task = tasks.find((task) => task.id === taskId);
        task.completed = true; // Modifie la propriété completed de la tâche
        setCompletedTask([...completedTask, taskId]); // Ajoute la tâche aux tâches terminées
    
        // Met à jour la tâche dans la base de données
        fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update task.');
            } else {
                console.log('Task update:', task);
            }
        })
        .catch(error => {
            console.error(error);
        });
    };
    
    const handleNoCheckedTask = (taskId) => {
        const task = tasks.find((task) => task.id === taskId);
        task.completed = false; // Modifie la propriété completed de la tâche
        setCompletedTask(completedTask.filter((t) => t !== taskId)); // Retire la tâche des tâches terminées
    
        // Met à jour la tâche dans la base de données
        fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update task.');
            }
        })
        .catch(error => {
            console.error(error);
        });
    };
    

    // Filtre les tâches par rapport à la categorie séléctionnée
    const filteredTasks = 
    selectedCategory === "" 
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);

    const uncompletedTask = Array.isArray(filteredTasks) ? filteredTasks.filter((task) => !task.completed) : [];
    const completedTasks = Array.isArray(filteredTasks) ? filteredTasks.filter((task) => task.completed) : [];

    

        
    return (
        <div className="task-container">
            <TaskForm onAddTask={onAddTask} category={category}/>

            <h2>À faire</h2>
            {uncompletedTask && uncompletedTask.length > 0 ? (
                uncompletedTask.map((task) => (
                    <div key={`uncompleted-${task.id}`} className="task">
                        <input type="checkbox" checked={false} onChange={() => {
                            handleCheckedTask(task.id)
                        }} />
                        <p>{task.name}</p>
                        <p>{task.category}</p>
                        <p>{task.priority}</p>
                        <button onClick={() => deleteTask(task)}>x</button>
                    </div>
                ))
                ) : (
                    <p className="none">Aucune tâches assignées</p>
                    )}

            <h2>Terminé</h2>
            
            <div>
                {completedTasks && completedTasks.length > 0 ? (
                    completedTasks.map((task) => (
                        <div key={`completed-${task.id}`} className="task completed" >
                            <input type="checkbox" checked={false} onChange={() => {
                                handleNoCheckedTask(task.id)
                            }} />
                            <p>{task.name}</p>
                            <p>{task.category}</p>
                            <p>{task.priority}</p>
                            <button onClick={() => deleteTask(task)}>x</button>
                        </div>
                    ))
                ) : (
                    <p className="none">Pas de tâches terminé</p>
                )}
            </div>
        </div>
    )
}

export default Task