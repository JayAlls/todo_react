import { useState } from "react"
import "./style.scss"

function Category({onCategoryClick}) {
    const [category, setCategory] = useState(["category 1", "category 2"])
    const [newCat, setNewCat] = useState("")
    const [showAddCat, setShowAddCat] = useState(false)
    

    const handleAddCat = (e) => {
        e.preventDefault()

        setCategory([...category, newCat])
        setShowAddCat(false)
        setNewCat("")
    }

    const deleteCat = (cat) => {
        setCategory(category.filter((c) => c !== cat ))
    }

    return (
        <div className="category-list">
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
                        <input type="text" value={newCat} placeholder="New category" onChange={(e) => setNewCat(e.target.value)} autoFocus />

                        <button onClick={handleAddCat}>Add</button>
                        <button onClick={() => setShowAddCat(false)}>Cancel</button>
                    </div>

                ) : (
                    <button className="add-btn" onClick={() => setShowAddCat(true)}>Add Category</button>
                )}
            </div>

        </div>
    )
}


export default Category