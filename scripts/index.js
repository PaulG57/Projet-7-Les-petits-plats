import { recipes } from "../data/recipes.js";
import { createCardsDOM } from "./templates.js";
import { remplirDropdowns } from "./select.js";
import { search } from "./recherche.js";

// Afficher le nombre de recettes sur la page

// Afficher les recettes sur la page
function init() {
    const container = document.getElementById("recipes-container");
    const cardsElement = createCardsDOM(recipes);
    container.append(...cardsElement);
    remplirDropdowns();
    search();
}

init();
