import { recipes } from "../data/recipes.js";

export function remplirDropdowns() {
    let ingredients = new Set();
    let appareils = new Set();
    let ustensiles = new Set();

    recipes.forEach(recipe => {
        recipe.ingredients.forEach(i => ingredients.add(i.ingredient));
        appareils.add(recipe.appliance);
        recipe.ustensils.forEach(u => ustensiles.add(u));
    });

    ajouterOptions([...ingredients], 'ingredients-dropdown');
    ajouterOptions([...appareils], 'appareils-dropdown');
    ajouterOptions([...ustensiles], 'ustensiles-dropdown');
}

function ajouterOptions(list, dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    
    // Ajout des nouvelles options sans supprimer le contenu existant
    list.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.className = 'dropdown-item';
        dropdown.appendChild(listItem);
    });
}
