
import "./Categories.css";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Breakfast",
      icon: "🍳",
    },
    {
      id: 2,
      name: "Lunch",
      icon: "🥗",
    },
    {
      id: 3,
      name: "Dinner",
      icon: "🍝",
    },
    {
      id: 4,
      name: "Dessert",
      icon: "🍰",
    },
    {
      id: 5,
      name: "Drinks",
      icon: "🥤",
    },
    {
      id: 6,
      name: "Snacks",
      icon: "🍿",
    },
  ];

  return (
    <section className="categories">
      <div className="categories-container">

        <div className="section-heading">
          <p>Explore Our</p>
          <h2>Recipe Categories</h2>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>

              <div className="category-icon">
                {category.icon}
              </div>

              <h3>{category.name}</h3>

              <span>Explore Recipes →</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;
