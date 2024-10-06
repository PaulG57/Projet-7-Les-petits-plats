
import { recipes } from "../data/recipes.js";
import { createCardsDOM } from "./template.js";
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

/*
import { recipes } from "../data/recipes.js";
import { createCardsDOM } from "./templates.js";
import { remplirDropdowns } from "./select.js";
import { search } from "./recherche.js";

function onSearch(searchTerm, recipes) {
    if(!searchTerm || searchTerm.length < 3) {
        return recipes;
    }

    return recipes.filter(recipe => {
        const recipeName = recipe.name.toLowerCase();
        const myArray = recipe.ingredients.filter(ingredient => {
            return ingredient.ingredient.includes(searchTerm)
        })
        console.log('==> myArray', myArray)
        return recipeName.includes(searchTerm) || recipe.ingredients.includes(searchTerm)
    });
}

function fillCards(container, recipes) {
    container.innerHTML = '';
    const cardsElement = createCardsDOM(recipes);
    container.append(...cardsElement);
}

function init() {
    const container = document.getElementById("recipes-container");
    fillCards(container, recipes);
    remplirDropdowns();
    search();

    const searchInput = document.getElementById('searchBar');
    const button = document.getElementById('loupe');
    button.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredRecipes = onSearch(searchTerm, recipes);
        fillCards(container, filteredRecipes);
    })
}

init();

*/