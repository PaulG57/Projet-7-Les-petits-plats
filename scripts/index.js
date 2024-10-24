import { recipes } from "../data/recipes.js";
import { createCardsDOM } from "./template.js";
import { searchRecipes } from "./search.js";
import { fillDropdowns } from "./dropdown.js";

let selectedTags = [];

// Met à jour l'affichage des recettes et des dropdowns
function displayRecipes() {
    const query = document.getElementById('searchBar').value; // Récupère la valeur de la barre de recherche
    const filteredRecipes = searchRecipes(query, recipes, selectedTags); // Utilise la recherche et les tags
    const container = document.getElementById("recipes-container");
    container.innerHTML = ''; // Vider les recettes précédentes
    container.append(...createCardsDOM(filteredRecipes)); // Affiche les nouvelles recettes
    document.getElementById("nb-recettes").textContent = `${filteredRecipes.length} recettes`;

    fillDropdowns(filteredRecipes); // Met à jour les dropdowns avec les recettes filtrées
}

// Affiche les recettes initiales
displayRecipes();

// Mise à jour en temps réel avec la barre de recherche
document.getElementById('searchBar').addEventListener('input', (e) => {
    displayRecipes(e.target.value);
});

// Affiche les tags sélectionnés dans la div #tags-zone
function displayTags() {
    const container = document.getElementById("tags-zone");
    container.innerHTML = ''; // Vide la zone des tags avant d'ajouter

    selectedTags.forEach(tag => {
        const tagBtn = document.createElement('div');
        tagBtn.classList.add('btn', 'tag-btn');
        tagBtn.textContent = tag;

        // Utilisation de insertAdjacentHTML pour ajouter l'icône
        tagBtn.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-xmark" style="cursor: pointer;"></i>');

        // Gestion de la suppression du tag quand on clique sur l'icône
        tagBtn.querySelector('i').addEventListener('click', () => {
            selectedTags = selectedTags.filter(t => t !== tag); // Supprime le tag
            displayTags(); // Met à jour l'affichage des tags
            displayRecipes(document.getElementById('searchBar').value); // Met à jour les recettes filtrées
        });

        container.appendChild(tagBtn);
    });
}

// Gestion du clic sur les dropdowns via délégation d'événement
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('dropdown-item')) {
        const tag = e.target.textContent.toLowerCase();
        selectedTags = selectedTags.includes(tag) 
            ? selectedTags.filter(t => t !== tag) 
            : [...selectedTags, tag];
            
        displayRecipes(document.getElementById('searchBar').value);
        displayTags();
    }
});
