import { RecipeCardProps } from "../@types/recipe.ts";
import "../assets/styles/recipeCard.scss";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigate = useNavigate();

  const handleClick = (id: number): void => {
    navigate(`/recipe/${id}`);
  };

  return (
    <>
      <div className={`recipe__card`}>
        <img src={recipe.imgSrc} alt="" />
        <div className="recipe__content">
          <h2>{recipe.name}</h2>
          <p className="recipe__author">
            {recipe.user.firstname} {recipe.user.lastname}
          </p>
          <p className="recipe__description">{recipe.description}</p>
          <button
            className="recipe__button"
            onClick={() => handleClick(recipe.id)}
          >
            Je cuisine !
          </button>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
