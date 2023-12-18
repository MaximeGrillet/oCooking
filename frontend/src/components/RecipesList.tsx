import RecipeCard from "./RecipeCard.tsx";
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
