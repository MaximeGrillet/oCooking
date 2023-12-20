import { SyntheticEvent } from "react";
import { Recipe } from "../@types/recipe";

const CacaoModal = ({recipe, onClose}: {recipe: Recipe, onClose: (e: SyntheticEvent) => void}) => {
    return (
        <div className="cacao__modal">
            <div className="modal__content">
                <h2>{recipe.name}</h2>
                <button onClick={onClose}>
                    Fermer
                </button>
            </div>
        </div>
    )
}

export default CacaoModal;