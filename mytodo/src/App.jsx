import { useEffect, useState } from 'react';
import './App.scss';
import Category from './component/Category/Category';
import Title from './component/Title/Title';
import Task from './component/Task/Task';

function App() {
  const [showCat, setShowCat] = useState(false)
  const [tasks, setTasks] = useState([
    {id: 1, name: "Task 1", category: "category 1"},
    {id: 2, name: "Task 2", category: "category 2"}
  ])
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  // useEffect(() => {
  //   console.log(selectedCategory);
  // }, [selectedCategory])

  return (
    <div className="App">
      <Title />

      <div className="container">
        {showCat ? (
          <div className='cat-container'>
            <Category onCategoryClick={handleCategoryClick} />
            <button className='close-btn' onClick={() => setShowCat(false)}>X</button>
          </div>
        ) : (
          <button className='cat-btn' onClick={() => setShowCat(true)}>Categories</button>
          )} 
        <Task selectedCategory={selectedCategory} tasks={tasks} />
      </div>
    </div>
  );
}


export default App;

