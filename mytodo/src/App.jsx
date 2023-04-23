import { useEffect, useState } from 'react';
import './App.scss';
import Category from "./component/Category/Category";
import Title from './component/Title/Title';
import Task from './component/Task/Task';

function App() {
  const [showCat, setShowCat] = useState(false)
  const [tasks, setTasks] = useState([
    {id: 1, name: "Task 1", category: "category 1"},
    {id: 2, name: "Task 2", category: "category 2"}
  ])

  // CATEGORY
  const [selectedCategory, setSelectedCategory] = useState("")
  const [category, setCategory] = useState(["category 1", "category 2"])

  const handleAddCat = (newCat) => {
    setCategory([...category, newCat])
  }

  const deleteCat = (cat) => {
    setCategory(category.filter((c) => c !== cat ))
  } 

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const handleNewCat = (newCat) => {
    setCategory([...category, newCat]); // mise à jour de la catégorie dans l'état de App
  };

  const addTask = (newTask) => {
        setTasks([...tasks, newTask])
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
        <Task selectedCategory={selectedCategory} tasks={tasks} onAddTask={addTask} category={category}/>
      </div>
    </div>
  );
}

export default App;
