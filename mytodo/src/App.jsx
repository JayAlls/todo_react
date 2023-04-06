import './App.scss'
import Title from './component/Title/Title'
import CategoryBar from './component/CategoryBar/CategoryBar'

function App() {
  const categories = ["Task 1", "Task 2", "Task 3"];

  return (
    <div className="App">
      <Title />
      <CategoryBar categories={categories}/>
    </div>
  )
}

export default App
