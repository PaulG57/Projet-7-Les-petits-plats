import { recipes } from "../data/recipes.js";
import { createCardsDOM } from "./template.js";
import { initSearch } from "./search.js";
import { remplirDropdowns } from "./dropdown.js";

const container = document.getElementById("recipes-container");
const nbRecettes = document.getElementById("nb-recettes");

// Mettre à jour les recettes affichées
export function updateRecipeDisplay(recipes) {
    container.innerHTML = '';
    const cardsElement = createCardsDOM(recipes); 
    container.append(...cardsElement);

    nbRecettes.textContent = `${recipes.length} recettes`;
}

function init() {
    remplirDropdowns(recipes);
    updateRecipeDisplay(recipes);  // Afficher les recettes initiales
    initSearch(); 
}

init();