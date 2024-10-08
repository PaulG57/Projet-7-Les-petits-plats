import { recipes } from "../data/recipes.js";
import { updateRecipeDisplay } from "./index.js";

export function initSearch() {
    const searchInput = document.getElementById('searchBar');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        if (query.length >= 3) {
            const filteredRecipes = recipes.filter(recipe => {
                const recipeName = recipe.name.toLowerCase();
                const ingredients = recipe.ingredients.map(ing => ing.ingredient.toLowerCase());
                const description = recipe.description.toLowerCase();
                
                return recipeName.includes(query) || ingredients.some(ing => ing.includes(query)) || description.includes(query);
            });

            updateRecipeDisplay(filteredRecipes);
        } else {
            updateRecipeDisplay(recipes);
        }
    });
}
