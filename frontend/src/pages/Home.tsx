import { useEffect } from "react";
import RecipesList from "../components/RecipesList.tsx";
import { useAppDispatch, useAppSelector } from "../hooks/redux.ts";
import { countRecipes, getAllRecipes, loadRecipesData } from "../store/features/recipe/recipeSlice.ts";

const Home = () => {
  // Use the recipe store
  // const recipesStore = useAppSelector(state => state.recipe.recipes);
  const recipesStore = useAppSelector(getAllRecipes);
  const recipesCount = useAppSelector(countRecipes);
  console.log(recipesStore)

  // Dispatch a function in a store
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadRecipesData())
  }, []);

  return (
    <>
      <h1>Recettes: {recipesCount}</h1>
      <RecipesList recipes={recipesStore} />
    </>
  );
};

export default Home;
