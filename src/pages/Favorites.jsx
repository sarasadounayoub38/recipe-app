
import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

 

function Favorites({favorites,setFavorites}){
const favoritesRecipes=recipes.filter((recipe)=>
    favorites.includes(recipe.id)
)
return(
    <>
    <div className="container">
    <div className="row">
    
  {favoritesRecipes.map((recipe)=>(
     <div className="col-md-4"  key={recipe.id}>
<RecipeCard
 
    recipe={recipe}
    favorites={favorites}
    setFavorites={setFavorites}
       
/>
   </div>  ))}

    </div>
  </div>
     
    
    </>
    
);
}

export default Favorites;