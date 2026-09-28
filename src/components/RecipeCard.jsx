
import "./RecipeCard.css";
import { Link } from "react-router-dom";


function RecipeCard({ recipe, favorites, setFavorites }) {
   const isFavorite = favorites.includes(recipe.id);
  return (
    <Link to={`/recipes/${recipe.id}`} >
    <div className="recipe-card  position-relative">

      <img
        src={recipe.image}
        alt={recipe.name}
      />

      <div className="recipe-info">
        <span className="recipe-category">
          {recipe.category}
        </span>

        <h3>{recipe.name}</h3>
<button className="btn btn-light rounded-circle shadow-sm position-absolute top-0 end-0 m-3"
 onClick={(e) => {
  e.preventDefault();
if (favorites.includes(recipe.id)) {
  setFavorites(favorites.filter((id) => id !== recipe.id));
} else {
  setFavorites([...favorites, recipe.id]);
}}}>
  {isFavorite ? "❤️" : "🤍"}
</button>
        <div className="recipe-details">
          <span>🌍 {recipe.cuisine}</span>
          <span>⏱️ {recipe.time}</span>
        </div>

      </div>

    </div>
    </Link>
  );
}

export default RecipeCard;
