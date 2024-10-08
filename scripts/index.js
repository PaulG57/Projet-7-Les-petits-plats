import { recipes } from "../data/recipes.js";
import { createCardsDOM } from "./template.js";
import { initSearch } from "./search.js";

const container = document.getElementById("recipes-container");

// Mettre à jour les recettes affichées
export function updateRecipeDisplay(recipes) {
    container.innerHTML = '';
    const cardsElement = createCardsDOM(recipes); 
    container.append(...cardsElement);
}

function init() {
    updateRecipeDisplay(recipes);  // Afficher les recettes initiales
    initSearch();  // Appeler l'initialisation de la recherche
}

init();