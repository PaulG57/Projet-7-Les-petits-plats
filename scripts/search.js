import { updateRecipeDisplay } from "./index.js";
import { remplirDropdowns } from "./dropdown.js";

export function initSearch(query, recipes) {

        let initialRecipes = [...recipes];

        if (query.length >= 3) {
            initialRecipes = recipes.filter(recipe => {
                const recipeName = recipe.name.toLowerCase();
                const ingredients = recipe.ingredients.map(ing => ing.ingredient.toLowerCase());
                const description = recipe.description.toLowerCase();
                
                return recipeName.includes(query) || ingredients.some(ing => ing.includes(query)) || description.includes(query);
            });

        } 
            return initialRecipes;
}
