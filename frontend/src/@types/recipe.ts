import { User } from "./user.ts";

export type Recipe = {
  id: number;
  name: string;
  imgSrc: string;
  description: string;
  ingredients: string[];
  user: User;
  userId: number;
};

export type RecipeListProps = {
  recipes: Recipe[];
};

export type RecipeCardProps = {
  recipe: Recipe;
};
