import { recipes } from "../data/recipes.js";
import { createCardsDOM } from "./template.js";
import { initSearch } from "./search.js";
import { remplirDropdowns } from "./dropdown.js";

// Liste pour stocker les tags sélectionnés
let selectedTags = [];
const searchInput = document.getElementById('searchBar'); // Déclaration globale

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
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredRecipes = initSearch(query, recipes, selectedTags);
        remplirDropdowns(filteredRecipes);
        updateRecipeDisplay(filteredRecipes);
    });
}

// Gérer la sélection des tags
function handleTagSelection() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const tag = e.target.textContent.toLowerCase();
            console.log("Tag cliqué :", tag);  // Log pour le débogage

            if (!selectedTags.includes(tag)) {
                selectedTags.push(tag);
                console.log("Tags sélectionnés :", selectedTags);  // Log pour le débogage
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
