export function fillDropdowns(filteredRecipes) {
    const ingredientsSet = new Set();
    const appareilsSet = new Set();
    const ustensilesSet = new Set();

    // Récupère les ingrédients, appareils, et ustensiles uniques des recettes affichées
    filteredRecipes.forEach(recipe => {
        recipe.ingredients.forEach(ing => ingredientsSet.add(ing.ingredient));
        appareilsSet.add(recipe.appliance);
        recipe.ustensils.forEach(ust => ustensilesSet.add(ust));
    });

    // Remplir les dropdowns dynamiquement
    updateDropdown('ingredients-dropdown', [...ingredientsSet], 'ingredients-search');
    updateDropdown('appareils-dropdown', [...appareilsSet], 'appareils-search');
    updateDropdown('ustensiles-dropdown', [...ustensilesSet], 'ustensiles-search');
}

// Fonction pour mettre à jour les options d'un dropdown et permettre la recherche
function updateDropdown(dropdownId, items, searchInputId) {
    const dropdown = document.getElementById(dropdownId);
    const searchInput = document.getElementById(searchInputId);

    // Focus sur le champ de recherche
    dropdown.parentElement.querySelector('button').addEventListener('click', () => {
        searchInput.focus();
    });

    // Ajoute l'événement pour filtrer les données avant de les afficher
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredItems = items.filter(item => item.toLowerCase().includes(query));
        displayDropdownItems(dropdown, filteredItems); // Afficher les items filtrés
    });

    // Affiche les items initiaux sans filtrage
    displayDropdownItems(dropdown, items);
}

function displayDropdownItems(dropdown, items) {
    dropdown.querySelectorAll('li.dropdown-item').forEach(item => item.remove()); // Supprime les anciennes options

    // Ajoute les nouvelles options
    items.forEach(item => {
        const option = document.createElement('li');
        option.classList.add('dropdown-item');
        option.textContent = item;
        dropdown.appendChild(option);
    });
}