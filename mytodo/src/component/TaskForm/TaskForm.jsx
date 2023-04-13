import { useState } from "react";
import "./style.scss"

function TaskForm({ handleAddTask }) {

    const [name, setName] = useState("")
    const [deadline, setDeadline] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        handleAddTask( name, deadline, category );

        setName("")
        setDeadline("")
        setCategory("")
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
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value=''>Select Category</option>
        </select>

        <button type="submit">Add</button>
      </form>
    );
}

export default TaskForm