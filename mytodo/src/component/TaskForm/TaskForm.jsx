import { useState } from "react";
import "./style.scss"

function TaskForm({ handleAddTask }) {

    const [name, setName] = useState("")
    const [deadlines, setDeadlines] = useState("")
    const [category, setCategory] = useState("")
    // add new category
    const [categories, setCategories] = useState([])
    const [newCat, setNewCat] = useState("")
    const [showForm, setShowForm] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();

        handleAddTask({ name, deadlines, category });

        setName("")
        setDeadlines("")
        setCategory("")
    }

    const handleAddCat = (e) => {
        e.preventDefault()

        setCategories([...categories, newCat])
        setNewCat("")
        setShowForm(false)
    }

   

    return (
      <form onSubmit={handleSubmit}>
        <input 
            type="text"  
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Task name"
        />

        <input 
            type="date" 
            value={deadlines}
            onChange={(e) => setDeadlines(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value=''>Select Category</option>
            {categories.map((cat) => (
                <option value={cat} key={cat}> {cat} </option>
            ))}
        </select>

        {showForm ? (
            <div>
                <input 
                    type="text" 
                    value={newCat}
                    onChange={(e) => setNewCat(e.target.value)}
                    placeholder="New Category"
                />

                <button onClick={handleAddCat}> + </button>
            </div>
        ) : (
            <div>
                <button onClick={() => setShowForm(true)}>+</button>
            </div>
        )}

        <button type="submit">Add</button>
      </form>
    );
}

export default TaskForm