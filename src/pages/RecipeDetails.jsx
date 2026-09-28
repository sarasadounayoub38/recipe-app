import recipes from "../data/recipes";
import { Link, useParams } from "react-router-dom";

function RecipeDetails(){
    const { id } = useParams();
const recipe=recipes.find((recipe) => {

 return recipe.id===Number(id) }  
)
 if (!recipe) {
  return <h2>Recipe not found</h2>;
}
 return<>

<div className="container">
   <Link to="/" className="btn btn-outline-dark mb-4">
    ← Back to Recipes
  </Link>
  {/* Image + Recipe Information */}
  <div className="row">

    {/* Image */}
    <div className="col-md-6 d-flex justify-content-center align-items-center">
      <img
        className="img-fluid"
        src={recipe.image}
        alt={recipe.name}
      />
    </div>

    {/* Recipe Information */}
    <div className="col-md-6 mt-4 mt-md-0">
      <div className="card border-0 shadow-sm p-4">

        <h1 className="mb-3">{recipe.name}</h1>

        <span className="badge text-bg-secondary mb-4">
          {recipe.category}
        </span>

        <div className="d-flex gap-4 mb-4">
          <span>🌍 {recipe.cuisine}</span>
          <span>⏱️ {recipe.time}</span>
        </div>

        <hr />

        <h2 className="mt-4">Ingredients</h2>

        <div className="d-flex flex-wrap gap-2 mt-3">
          {recipe.ingredients.map((ingredient) => (
            <div
              key={ingredient}
              className="border rounded p-2 bg-light"
            >
              {ingredient}
            </div>
          ))}
        </div>

      </div>
    </div>

  </div>

  {/* Instructions - Separate Row */}
  <div className="row mt-5">
    <div className="col-12">

      <h2>Instructions</h2>

      <div className="d-flex flex-wrap gap-3 mt-3">
        {recipe.instructions.map((instruction, index) => (
          <div
            key={instruction}
            className="d-flex align-items-start gap-3 p-3 border rounded shadow-sm"
          >
            <div
              className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ width: "40px", height: "40px" }}
            >
              {index + 1}
            </div>

            <p className="mb-0 pt-2">
              {instruction}
            </p>
          </div>
        ))}
      </div>

    </div>
  </div>

</div>


 </>
 
;}
export default RecipeDetails;
