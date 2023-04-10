import './App.scss';
import Title from './component/Title/Title';
import CategoryBar from './component/CategoryBar/CategoryBar';
import TodoList from './component/TodoList/TodoList';
import { useState } from 'react';

function App() {
  const categories = ["Task 1", "Task 2", "Task 3", "Task 4"]
  const [tasks , setTasks] = useState([])

  return (
    <div className="App">
      <Title />
      <CategoryBar categories={categories} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;

