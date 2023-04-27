import { useEffect, useState } from 'react';
import './App.scss';
import Category from "./component/Category/Category";
import Title from './component/Title/Title';
import Task from './component/Task/Task';
import {getItems, setItem, deleteItem} from "./js/localStorage";

function App() {
  const [tasks, setTasks] = useState(getItems("tasks") || []) // stockage des tâches
  
  // CATEGORY
  const [showCat, setShowCat] = useState(false) // affichage des catégories
  const [selectedCategory, setSelectedCategory] = useState("") // séléction d'un categorie
  const [category, setCategory] = useState(getItems("category") || []) // stockage des categories 

  const handleAddCat = (newCat) => {
    const updatedCat = [...category, newCat]
    setCategory(updatedCat) // ajout d'une categorie
  }
  
  const deleteCat = (cat) => {
    const deletedCat = category.filter((c) => c !== cat );
    setCategory(deletedCat) // suppression d'une categorie
    deleteItem("category", cat)
    
  } 
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category) // selection d'une categories à afficher
  }
  
  const handleNewCat = (newCat) => {
    setCategory([...category, newCat]); // mise à jour de la catégorie dans l'état de App
    setItem("category", newCat)
  };

  // TASK

  const addTask = (newTask) => {
        setTasks([...tasks, newTask]) // ajout d'une tâche
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <div className="App">
      <Title />

      <div className="container">
        {showCat ? (
          <div className='cat-container'>
            <Category onCategoryClick={handleCategoryClick} category={category} handleAddCat={handleAddCat} deleteCat={deleteCat} onNewCat={handleNewCat}/>
            <button className='close-btn' onClick={() => setShowCat(false)}>X</button>
          </div>
        ) : (
          <button className='cat-btn' onClick={() => setShowCat(true)}>Categories</button>
          )} 
        <Task selectedCategory={selectedCategory} tasks={tasks} onAddTask={addTask} deleteTask={deleteTask} category={category}/>
      </div>
    </div>
  );
}

export default App;
