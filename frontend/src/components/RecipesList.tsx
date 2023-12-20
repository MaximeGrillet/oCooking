import RecipeCard from "./RecipeCard.tsx";
import { fetchRecipesWithDelay } from "../api/recipe.ts";
import { Recipe } from "../@types/recipe.ts";

const resource = fetchRecipesWithDelay();

const RecipesList = () => {
  const recipes = resource.read();

  return (
    <div className="recipes__list">
      {recipes.map((recipe: Recipe) => {
        return <RecipeCard recipe={recipe} key={recipe.id} />;
      })}
    </div>
  );
};

/*const RecipesList = ({ recipes }: RecipeListProps) => {
  return (
    <div className="recipes__list">
      {recipes.map((recipe) => {
        return <RecipeCard recipe={recipe} key={recipe.id} />;
      })}
    </div>
  );
};*/

export default RecipesList;
