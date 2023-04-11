import './App.scss';
import Title from './component/Title/Title';
import CategoryBar from './component/CategoryBar/CategoryBar';
import TodoList from './component/TodoList/TodoList';

import { useState } from 'react';

function App() {
  const [categories, setCategories] = useState(["Task 1"]);
  const [tasks , setTasks] = useState([]);

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const deleteCategory = (index) => {
    const newCategories = [...categories];
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  const editCategory = (index, newCategory) => {
    const newCategories = [...categories];
    newCategories[index] = newCategory;
    setCategories(newCategories);
  };

  return (
    <div className="App">
      <Title />
      <CategoryBar categories={categories} addCategory={addCategory} deleteCategory={deleteCategory} editCategory={editCategory} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}


export default App;

