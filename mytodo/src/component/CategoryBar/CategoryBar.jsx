import "./style.scss";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function CategoryBar({ categories, addCategory, deleteCategory, editCategory }) {
  const [editing, setEditing] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    addCategory(newCategory);
    setNewCategory("");
    setEditing(false);
  };

  const handleEditCategory = (index) => {
    editCategory(index, newCategory);
    setNewCategory("");
    setEditing(false);
  };

  return (
    <div className="category-bar">
      {categories.map((category, index) => (
        <div className="category" key={index}>
          {editing === index ? (
            <>
              <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
              <button onClick={() => handleEditCategory(index)}>Save</button>
              <button onClick={() => setEditing(false)}>X</button>
            </>
          ) : (
            <>
              {category}
              <button onClick={() => setEditing(index)}><FontAwesomeIcon icon={faPen}/></button>
              <button onClick={() => deleteCategory(index)}>X</button>
            </>
          )}
        </div>
      ))}
      <div className="category-edit">
        {editing === "new" ? (
          <>
            <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
            <button onClick={handleAddCategory}>Add</button>
            <button onClick={() => setEditing(false)}>X</button>
          </>
        ) : (
          <button onClick={() => setEditing("new")}>+</button>
        )}
      </div>
    </div>
  );
}

  
  export default CategoryBar