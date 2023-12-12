import RecipeCard from "./RecipeCard.tsx";
import "../assets/styles/recipesList.scss";
import { RecipeListProps } from "../@types/recipe.ts";

const RecipesList = ({ recipes }: RecipeListProps) => {
  return (
    <div className="recipes__list">
      {recipes.map((recipe) => {
        return <RecipeCard recipe={recipe} key={recipe.id} />;
      })}
    </div>
  );
};

export default RecipesList;
