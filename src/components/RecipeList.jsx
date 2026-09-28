
import recipes from "../data/recipes";
import RecipeCard from "./RecipeCard";
import "./RecipeList.css";

function RecipeList({ searchTerm, favorites, setFavorites  }) {

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="recipes-section">

      <div className="recipes-container">

        <h2>Popular Recipes 🍳</h2>

        <div className="recipes-grid">

          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                  favorites={favorites}
  setFavorites={setFavorites}
              />
            ))
          ) : (
            <p className="no-results">
              No recipes found 😢
            </p>
          )}

        </div>

      </div>

    </section>
  );
}

export default RecipeList;
