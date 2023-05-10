import { useEffect, useState } from 'react';
import './App.scss';
import Category from "./component/Category/Category";
import Title from './component/Title/Title';
import Task from './component/Task/Task';

function App() {
  
  // **************************************** CATEGORY ****************************************************************
  
  const [showCat, setShowCat] = useState(false) // affichage des catégories
  const [selectedCategory, setSelectedCategory] = useState("") // séléction d'un categorie
  const [category, setCategory] = useState([]) // stockage des categories 

  const handleAddCat = (newCat) => {
    const updatedCat = [...category, newCat]
    setCategory(updatedCat) // ajout d'une categorie
  }
  
  const deleteCat = (cat) => {
    const deletedCat = category.filter((c) => c !== cat );
    setCategory(deletedCat) // suppression d'une categorie
    
  } 
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category) // selection d'une categories à afficher
  }
  
  const handleNewCat = (newCat) => {
    setCategory([...category, newCat]); // mise à jour de la catégorie dans l'état de App
  };
  
  // ************************************************ TASK *******************************************************
  const [tasks, setTasks] = useState([]) // Stockage des tâches

  // Récupère les tâches dans la base de donnée
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then(res => res.json())
      .then(data => {
        setTasks(data)
      })
      .catch(err => console.error(err))
  }, []);

  
  
  const addTask = (newTask) => {

    // Ajoute une tâche à la base de donnée 
    fetch("http://localhost:3000/tasks", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    
    setTasks([...tasks, newTask]) // ajout d'une tâche
  }

  


  const deleteTask = (taskId) => {
    const id = taskId.id
    console.log(taskId);
    history.pushState(null, null, id);
    const updatedTask = tasks.filter((task) => task !== taskId)
    setTasks(updatedTask)
    
    // Supprime une tâche à la base de donnée 
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Task deleted:', data);
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
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
