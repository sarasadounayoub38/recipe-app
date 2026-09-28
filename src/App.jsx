


import { Routes, Route } from "react-router-dom";
import RecipeDetails from "./pages/RecipeDetails"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Favorites from "./pages/Favorites"
import Recipes from "./pages/Recipes";


function App() {
const [favorites, setFavorites] = useState(
  JSON.parse(localStorage.getItem("favorites")) || []
);
useEffect(() => {
localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);
  return (
    <>
      <Navbar />
 <Routes>
<Route path="/" element={<Home  favorites={favorites}
      setFavorites={setFavorites}/>} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
<Route
  path="/favorites"
  element={
    <Favorites
      favorites={favorites}
      setFavorites={setFavorites}
    />
  }
/>

<Route
  path="/recipes"
  element={
    <Recipes
      favorites={favorites}
      setFavorites={setFavorites}
    />
  }
/>
    </Routes>
<Footer />

    </>
  );
}

export default App;
