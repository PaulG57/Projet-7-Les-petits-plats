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

    // Afficher les options initiales
    afficherOptions([...ingredients], 'ingredients-dropdown');
    afficherOptions([...appareils], 'appareils-dropdown');
    afficherOptions([...ustensiles], 'ustensiles-dropdown');

    // Initialiser la recherche dans les dropdowns
    initDropdownSearch([...ingredients], 'ingredients-dropdown', 'ingredients-search');
    initDropdownSearch([...appareils], 'appareils-dropdown', 'appareils-search');
    initDropdownSearch([...ustensiles], 'ustensiles-dropdown', 'ustensiles-search');
}

function afficherOptions(list, dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const items = dropdown.querySelectorAll('.dropdown-item'); // Sélectionner les éléments de la liste existants

    // Supprimer uniquement les éléments de la liste existants, mais garder la zone de recherche
    items.forEach(item => item.remove());

    // Ajouter les nouvelles options
    list.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.className = 'dropdown-item';
        dropdown.appendChild(listItem);
    });
}

// Fonction pour initier la recherche dans les dropdowns en filtrant les données
function initDropdownSearch(initialList, dropdownId, searchInputId) {
    const searchInput = document.getElementById(searchInputId);

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();

        // Filtrer les données en fonction de la recherche
        const filteredList = initialList.filter(item => item.toLowerCase().includes(query));

        // Afficher les options filtrées
        afficherOptions(filteredList, dropdownId);
    });
}
