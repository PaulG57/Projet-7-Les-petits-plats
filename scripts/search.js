// search.js
export function initSearch(query, recipes, selectedTags = []) {
    // Normaliser la requête pour éviter les différences de casse
    const normalizedQuery = query.toLowerCase().trim();

    // Filtrer les recettes
    const filteredRecipes = recipes.filter(recipe => {
        const recipeName = recipe.name.toLowerCase();
        const ingredients = recipe.ingredients.map(ing => ing.ingredient.toLowerCase());
        const description = recipe.description.toLowerCase();
        const appareils = recipe.appliance.toLowerCase();
        const ustensiles = recipe.ustensils.map(ust => ust.toLowerCase());

        // Vérification pour le filtrage par mots-clés
        const matchesQuery = normalizedQuery.length < 3 || // Si la requête est courte, ignorer ce filtre
            recipeName.includes(normalizedQuery) ||
            description.includes(normalizedQuery) ||
            ingredients.some(ing => ing.includes(normalizedQuery));

        // Vérification pour le filtrage par tags
        const matchesTags = selectedTags.length === 0 || // Si aucun tag n'est sélectionné, ignorer ce filtre
            selectedTags.every(tag => // Tous les tags doivent correspondre
                ingredients.includes(tag.toLowerCase()) ||
                appareils.includes(tag.toLowerCase()) ||
                ustensiles.includes(tag.toLowerCase())
            );

        // La recette doit correspondre à la fois à la requête et aux tags
        return matchesQuery && matchesTags;
    });

    return filteredRecipes; // Retourner les recettes filtrées
}
