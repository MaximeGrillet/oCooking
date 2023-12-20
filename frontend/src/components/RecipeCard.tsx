import { createPortal } from "react-dom";
import { RecipeCardProps } from "../@types/recipe.ts";
import { useNavigate } from "react-router-dom";
import { SyntheticEvent, useState } from "react";
import CacaoModal from "./CacaoModal.tsx";

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigate = useNavigate();
  const [showCacaoModal, setShowCacaoModal] = useState(false);

  const handleClick = (id: number): void => {
    navigate(`/recipe/${id}`);
  };

  const openModal = () => {
    setShowCacaoModal(true);
  }

  const closeModal = (e: SyntheticEvent) => {
    e.stopPropagation();
    setShowCacaoModal(false);
  }

  return (
    <>
      <div className={`recipe__card`} onClick={openModal}>
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

          {showCacaoModal &&
            createPortal(
              <CacaoModal recipe={recipe} onClose={closeModal} />,
              document.body
            )
          }
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
