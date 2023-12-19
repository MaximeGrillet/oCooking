import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Recipe } from "../../../@types/recipe";
import { RootState } from "../../store";
import { fetchRecipes } from "../../../api/recipe";

// Define a type for the slice state
export interface RecipeState {
    recipes: Recipe[],
    count: number
}

// Define the initial state using that type
const initialState: RecipeState = {
    recipes: [
        {
            "id": 1,
            "name": "Poulet rôti aux herbes",
            "imgSrc": "https://picsum.photos/750/200",
            "description": "Un délicieux poulet rôti aux herbes aromatiques.",
            "ingredients": [
                "1 poulet",
                "Herbes de Provence",
                "Sel",
                "Poivre"
            ],
            "userId": 3,
            "user": {
                "email": "nicolasguerin@email.fr",
                "firstname": "Nicolas",
                "lastname": "Guerin",
                "id": 3
            }
        },
        {
            "id": 2,
            "name": "Lasagnes bolognaises",
            "imgSrc": "https://picsum.photos/200/300",
            "description": "Des lasagnes savoureuses avec une sauce bolognaise maison.",
            "ingredients": [
                "Feuilles de lasagne",
                "Sauce bolognaise",
                "Fromage râpé",
                "Béchamel"
            ],
            "userId": 4,
            "user": {
                "email": "nicolasguerin@email.fr",
                "firstname": "Nicolas",
                "lastname": "Guerin",
                "id": 3
            }
        },
    ],
    count: 10
}

// Async logic to fetch all recipes
export const loadRecipesData = createAsyncThunk(
    "recipe/fetchRecipes",
    async () => {
        return await fetchRecipes();
    }
);

// Create recipeSlice with createSlice
export const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        test: (state) => {
            console.log("Recipes in slice", state.count);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadRecipesData.fulfilled, (state, action) => {
                state.recipes = action.payload;
            })
    },
})

// Create a selector to get all recipes
export const getAllRecipes = (state: RootState) => {
    return state.recipe.recipes;
}

export const countRecipes = (state: RootState) => {
    return state.recipe.recipes.length;
}

export const {test} = recipeSlice.actions;
