import { useState } from "react"
import "./style.scss"

function Category() {
    const [category, setCategory] = useState([])
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
                    <p>{cat}</p>
                    <button onClick={() => deleteCat(cat)}>x</button>
                    </div>
                ))
            ) : (
                <p> </p>
            )}

            <div className="add-cat">
                {showAddCat ? (
                    <div>
                        <input type="text" value={newCat} placeholder="New category" onChange={(e) => setNewCat(e.target.value)} autoFocus />

                        <button onClick={handleAddCat}>Add</button>
                        <button onClick={() => setShowAddCat(false)}>Cancel</button>
                    </div>

                ) : (
                    <button onClick={() => setShowAddCat(true)}>Add Category</button>
                )}
            </div>

        </div>
    )
}


export default Category