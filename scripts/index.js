import { recipes } from "../data/recipes.js";
import { createCardsDOM } from "./template.js";
import { initSearch } from "./search.js";
import { remplirDropdowns } from "./dropdown.js";

// Liste pour stocker les tags sélectionnés
let selectedTags = [];

// Mettre à jour les recettes affichées
function updateRecipeDisplay(recipes) {
    const container = document.getElementById("recipes-container");
    container.innerHTML = '';
    const cardsElement = createCardsDOM(recipes); 
    container.append(...cardsElement);
    const nbRecettes = document.getElementById("nb-recettes");
    nbRecettes.textContent = `${recipes.length} recettes`;
}

// Gérer la recherche
function handleSearch() {
    const searchInput = document.getElementById('searchBar');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredRecipes = initSearch(query, recipes, selectedTags);
        remplirDropdowns(filteredRecipes);
        updateRecipeDisplay(filteredRecipes);
    });
}

// Gérer la sélection des tags
function handleTagSelection() {
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const tag = e.target.textContent.toLowerCase();
            if (!selectedTags.includes(tag)) {
                selectedTags.push(tag);
                updateRecipeDisplay(initSearch(searchInput.value, recipes, selectedTags));
            }
        });
    });
}

// Initialiser l'application
function init() {
    remplirDropdowns(recipes);
    updateRecipeDisplay(recipes);  // Afficher les recettes initiales
    handleSearch();                 // Gérer les événements de recherche
    handleTagSelection();           // Gérer la sélection des tags
}

init();
