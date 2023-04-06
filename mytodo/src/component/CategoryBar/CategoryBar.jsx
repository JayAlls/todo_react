import "./style.scss";

function CategoryBar({categories}) {

    return (
        <div className="category-bar">
        {categories.map((category, index) => (
          <div className="category" key={index}>
            {category}
          </div>
        ))}
      </div>
    )
  }
  
  export default CategoryBar