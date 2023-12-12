import { User } from "../@types/user.ts";

export const fetchRecipes = async () => {
  const response = await fetch("/api/recipes?_expand=user");

  return await response.json();
};

export const fetchRecipe = async (recipeId: string | undefined) => {
  const response = await fetch(`/api/recipes/${recipeId}?_expand=user`);

  return await response.json();
};

export const fetchRecipesForConnectedUser = async (user: User | null) => {
  const response = await fetch(`/api/recipes?userId=${user?.id}&_expand=user`);

  return await response.json();
};
