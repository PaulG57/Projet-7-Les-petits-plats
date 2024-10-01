import { recipes } from "../data/recipes.js";

export function remplirDropdowns() {
    const ingredientsSet = new Set();
    const appareilsSet = new Set();
    const ustensilesSet = new Set();

    // Parcourir chaque recette
    recipes.forEach(recette => {
        // Extraire les ingrédients
        recette.ingredients.forEach(ing => {
            ingredientsSet.add(ing.ingredient);  // Ajouter chaque ingrédient dans le Set
        });

        // Extraire l'appareil
        appareilsSet.add(recette.appliance);  // Ajouter l'appareil au Set

        // Extraire les ustensiles
        recette.ustensils.forEach(ustensil => {
            ustensilesSet.add(ustensil);  // Ajouter chaque ustensile au Set
        });
    });

    // Ajouter les options aux dropdowns
    ajouterOptionsAuDropdown(ingredientsSet, 'ingredients-dropdown');
    ajouterOptionsAuDropdown(appareilsSet, 'appareils-dropdown');
    ajouterOptionsAuDropdown(ustensilesSet, 'ustensiles-dropdown');
}

// Fonction utilitaire pour ajouter des options à un dropdown
function ajouterOptionsAuDropdown(set, dropdownId) {
    const dropdown = document.getElementById(dropdownId);

    // Parcourir chaque élément du Set et créer une <li> pour le dropdown
    set.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.classList.add('dropdown-item');
        dropdown.appendChild(listItem);
    });
}
