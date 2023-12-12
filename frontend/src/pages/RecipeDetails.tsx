import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Recipe } from "../@types/recipe.ts";
import { fetchRecipe } from "../api/recipe.ts";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    (async () => {
      setRecipe(await fetchRecipe(id));
    })();
  }, [id]);

  return (
    <>
      <div className="recipe__details">
        <img src={recipe?.imgSrc} alt="" />
        <h1>{recipe?.name}</h1>
        <p>
          {recipe?.user.firstname} {recipe?.user.lastname}
        </p>
        <p>{recipe?.description}</p>
        <h2>Ingrédients</h2>
        {recipe?.ingredients.map((item) => {
          return <p key={item}>{item}</p>;
        })}
      </div>
    </>
  );
};

export default RecipeDetails;
