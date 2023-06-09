import "./style.scss"
import { useState } from "react";

function TaskForm({ onAddTask, category }) {
  const [name, setName] = useState("");
  const [selectedCat, setSelectedCat] = useState("")
  const [selectedPriority, setSelectedPriority] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask({ id: Date.now(), name, category: selectedCat, priority: selectedPriority, completed: false});
    setName("");
    setSelectedPriority("");
    setSelectedCat("");
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Task name"
        />
      </label>

      <label>
        <select value={selectedCat} onChange={(event) => setSelectedCat(event.target.value)}>
          <option value="">Select Category</option>
          {category.map((cat) => (
            <option key={`category-${cat}`} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label >
        <select value={selectedPriority} onChange={(event) => setSelectedPriority(event.target.value)}>
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>

      <button type="submit">
        +
      </button>

    </form>
  );
}

export default TaskForm;
