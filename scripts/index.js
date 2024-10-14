import { recipes } from "../data/recipes.js";
import { createCardsDOM } from "./template.js";
import { initSearch } from "./search.js";
import { remplirDropdowns } from "./dropdown.js";

// Mettre à jour les recettes affichées
export function updateRecipeDisplay(recipes) {
    const container = document.getElementById("recipes-container");
    container.innerHTML = '';
    const cardsElement = createCardsDOM(recipes); 
    container.append(...cardsElement);
    const nbRecettes = document.getElementById("nb-recettes");
    nbRecettes.textContent = `${recipes.length} recettes`;
}

function init() {
    remplirDropdowns(recipes);
    updateRecipeDisplay(recipes);  // Afficher les recettes initiales
    const searchInput = document.getElementById('searchBar');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const initialRecipes = initSearch(query, recipes);
        remplirDropdowns(initialRecipes);
        updateRecipeDisplay(initialRecipes);
    });
}

init();