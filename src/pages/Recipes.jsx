import RecipeList from "../components/RecipeList";
import { useState } from "react";

function Recipes({ favorites, setFavorites }) {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <div className="container my-4">
    <input
  type="text"
    className="form-control"
  placeholder="Search recipes..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
</div>
    <RecipeList
    searchTerm={searchTerm}
  favorites={favorites}
  setFavorites={setFavorites}
   />
 </> );
}

export default Recipes;