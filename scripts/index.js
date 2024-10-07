import { recipes } from "../data/recipes.js";
import { createCardsDOM } from "./template.js";
import { remplirDropdowns } from "./dropdown.js";

// Afficher le nombre de recettes sur la page

// Afficher les recettes sur la page
function init() {
    const container = document.getElementById("recipes-container");
    const cardsElement = createCardsDOM(recipes);
    container.append(...cardsElement);
    remplirDropdowns();
}

init();