import "./style.scss"
import { useState } from "react";

function TaskForm({ onAddTask, category }) {
  const [name, setName] = useState("");
  const [selectedCat, setSelectedCat] = useState("")
  const [selectedPriority, setSelectedPriority] = useState("")
  const [deadline, setDeadline] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask({ id: Date.now(), name, category: selectedCat, priority: selectedPriority, deadline});
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
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label >
        <select value={selectedPriority} onChange={(event) => setSelectedPriority(event.target.value)}>
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      <label>
        <input type="date" value={deadline} onChange={(event) => setDeadline(event.target.value)} />
      </label>

      <button type="submit">
        Add Task
      </button>

    </form>
  );
}

export default TaskForm;
