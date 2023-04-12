import React, { useState } from "react";
import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import { v4 as uuidv4 } from 'uuid';

function TodoList({ categories }) {
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');


  const addTask = (task) => {
    const newTask = { ...task, id: uuidv4(), categories:[task.category] };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // On filtre les tâches en fonction de la catégorie sélectionnée
  const filteredTasks = tasks.filter(task => {
    if (selectedCategory === '') { // Si aucune catégorie sélectionnée, on renvoie toutes les tâches
      return true;
    } else {
      return task.categories.includes(selectedCategory); // Sinon, on ne renvoie que les tâches de la catégorie sélectionnée
    }
  });

  return (
    <div>
      <TaskForm handleAddTask={addTask} categories={categories} />
      {/* On affiche une liste déroulante pour sélectionner la catégorie */}
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All categories</option> 
        {categories.map((category) => ( 
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <TaskList tasks={filteredTasks} deleteTask={deleteTask}  />
    </div>
  );
}

export default TodoList;
