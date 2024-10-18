// index.js
import { recipes } from "../data/recipes.js";
import { createCardsDOM } from "./template.js";
import { initSearch } from "./search.js";
import { remplirDropdowns } from "./dropdown.js";

let selectedTags = []; // Liste des tags sélectionnés

// Met à jour l'affichage des recettes et des dropdowns
function updateDisplay(query = '') {
    const filteredRecipes = initSearch(query, recipes, selectedTags);
    remplirDropdowns(filteredRecipes);
    updateRecipeDisplay(filteredRecipes);
    attachDropdownEvents(); // Ré-attache les événements après mise à jour
}

// Met à jour le nombre et les cartes de recettes affichées
function updateRecipeDisplay(recipes) {
    const container = document.getElementById("recipes-container");
    container.innerHTML = '';
    container.append(...createCardsDOM(recipes));
    document.getElementById("nb-recettes").textContent = ` ${recipes.length} recettes`;
}

// Gère l'ajout/suppression de tags et met à jour l'affichage
function toggleTag(tag) {
    selectedTags = selectedTags.includes(tag) 
        ? selectedTags.filter(t => t !== tag) 
        : [...selectedTags, tag];
    updateDisplay(document.getElementById('searchBar').value);
}

// Attache les événements aux éléments des dropdowns
function attachDropdownEvents() {
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => toggleTag(item.textContent.toLowerCase()));
    });
}

// Initialise l'application
function init() {
    updateDisplay(); // Affiche les recettes initiales et configure les dropdowns
    document.getElementById('searchBar').addEventListener('input', (e) => {
        updateDisplay(e.target.value);
    });
}

init();
