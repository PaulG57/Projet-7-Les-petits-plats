export function remplirDropdowns(recipesList) {
    let ingredients = new Set();
    let appareils = new Set();
    let ustensiles = new Set();

    // Récupérer les ingrédients, appareils et ustensiles des recettes filtrées ou totales
    recipesList.forEach(recipe => {
        recipe.ingredients.forEach(i => ingredients.add(i.ingredient));
        appareils.add(recipe.appliance);
        recipe.ustensils.forEach(u => ustensiles.add(u));
    });

    viderOptions('ingredients-dropdown', 'ingredients-search');
    viderOptions('appareils-dropdown', 'appareils-search');
    viderOptions('ustensiles-dropdown', 'ustensiles-search');

    ajouterOptions([...ingredients], 'ingredients-dropdown');
    ajouterOptions([...appareils], 'appareils-dropdown');
    ajouterOptions([...ustensiles], 'ustensiles-dropdown');
}

function viderOptions(dropdownId, searchInputId) {
    const dropdown = document.getElementById(dropdownId);
    const searchInput = document.getElementById(searchInputId);

    dropdown.innerHTML = '';
    dropdown.appendChild(searchInput);
}

function ajouterOptions(list, dropdownId) {
    const dropdown = document.getElementById(dropdownId);

    list.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.className = 'dropdown-item';
        dropdown.appendChild(listItem); 
    });
}
