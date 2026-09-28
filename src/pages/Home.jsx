
import { useState } from "react";
import Hero from "../components/Hero";
import RecipeList from "../components/RecipeList";
import Categories from "../components/Categories";


function Home({ favorites, setFavorites }) {


  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
     

      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <RecipeList
        searchTerm={searchTerm}
        favorites={favorites}
  setFavorites={setFavorites}
      />
      <Categories />



    </>
  );
}

export default Home;
