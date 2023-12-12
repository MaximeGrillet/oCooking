import { useEffect, useState } from "react";
import RecipesList from "../components/RecipesList.tsx";
import { fetchRecipes } from "../api/recipe.ts";
import { Recipe } from "../@types/recipe.ts";

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    (async () => {
      setRecipes(await fetchRecipes());
    })();
  }, []);

  return (
    <>
      <RecipesList recipes={recipes} />
    </>
  );
};

export default Home;
