import { recipes } from "../data/recipes.js";
import { createCardsDOM } from "./template.js";
import { remplirDropdowns } from "./dropdown.js";

const container = document.getElementById("recipes-container");
const cardsElement = createCardsDOM(recipes);

function init() {
    container.append(...cardsElement);
    remplirDropdowns();
}

init();