import { useContext, useEffect, useState } from "react";
import { fetchRecipesForConnectedUser } from "../api/recipe.ts";
import { AuthContext, RequiredAuth } from "../hooks/auth-context.tsx";
import RecipeCard from "../components/RecipeCard.tsx";
import { Recipe } from "../@types/recipe.ts";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      setRecipes(await fetchRecipesForConnectedUser(user));
    })();
  }, []);

  return (
    <>
      <RequiredAuth>
        <div className="my__recipes">
          {recipes.map((recipe: Recipe) => {
            return <RecipeCard recipe={recipe} key={recipe.id} />;
          })}
        </div>
      </RequiredAuth>
    </>
  );
};

export default MyRecipes;
