import "./style.scss"
import { useState } from "react";


function Category({ onCategoryClick, category, deleteCat, onNewCat }) {
    const [showAddCat, setShowAddCat] = useState(false);
    const [newCat, setNewCat] = useState("");
  
    const handleNewCat = () => {
      onNewCat(newCat); // appel de la fonction de rappel pour passer la nouvelle catégorie
      setNewCat("");
      setShowAddCat(false);
    };
  
    return (
      <div className="category-list">
        <div className="category">
          <p onClick={() => onCategoryClick("")}>All Category</p>
        </div>
        {category.length > 0 ? (
          category.map((cat) => (
            <div key={cat} className="category">
              <p onClick={() => onCategoryClick(cat)}>{cat}</p>
              <button onClick={() => deleteCat(cat)}>x</button>
            </div>
          ))
        ) : (
          <p className="no-cat">No Category</p>
        )}
  
        <div className="add-cat">
          {showAddCat ? (
            <div className="show-cat">
              <input
                type="text"
                value={newCat}
                placeholder="New category"
                onChange={(e) => setNewCat(e.target.value)}
                autoFocus
              />
  
              <button onClick={handleNewCat}>Add</button>
              <button onClick={() => setShowAddCat(false)}>Cancel</button>
            </div>
          ) : (
            <button
              className="add-btn"
              onClick={() => setShowAddCat(true)}
            >
              Add Category
            </button>
          )}
        </div>
      </div>
    );
  }

export default Category
  