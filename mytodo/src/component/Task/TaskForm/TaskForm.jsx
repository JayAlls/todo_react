import "./style.scss"
import { useState } from "react";

function TaskForm({ onAddTask, category }) {
  const [name, setName] = useState("");
  const [selectedCat, setSelectedCat] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask({ name, category });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Task category:
        <select value={selectedCat} onChange={(event) => setSelectedCat(event.target.value)}>
          {category.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
