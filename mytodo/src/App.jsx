import { useState } from 'react';
import './App.scss';
import Category from './component/Category/Category';
import Title from './component/Title/Title';

function App() {
  const [showCat, setShowCat] = useState(false)
  return (
    <div className="App">
      <Title />
      {showCat ? (
        <div className='cat-container'>
          <Category />
          <button className='close-btn' onClick={() => setShowCat(false)}>X</button>
        </div>
      ) : (
        <button className='cat-btn' onClick={() => setShowCat(true)}>Categories</button>
      )} 
    </div>
  );
}


export default App;

