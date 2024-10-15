export function initSearch(query, recipes, selectedTags = []) {
    let initialRecipes = [...recipes];

    // Filtrer les recettes en fonction de la requête ou des tags sélectionnés
    if (query.length >= 3 || selectedTags.length > 0) {
        initialRecipes = recipes.filter(recipe => {
            const recipeName = recipe.name.toLowerCase();
            const ingredients = recipe.ingredients.map(ing => ing.ingredient.toLowerCase());
            const description = recipe.description.toLowerCase();
            const appareils = recipe.appliance.toLowerCase();
            const ustensiles = recipe.ustensils.map(ust => ust.toLowerCase());

            // Vérification pour le filtrage par mots-clés
            const matchesQuery = recipeName.includes(query) ||
                description.includes(query) ||
                ingredients.some(ing => ing.includes(query));

            // Vérification pour le filtrage par tags
            const matchesTags = selectedTags.length === 0 || 
                selectedTags.some(tag => 
                    ingredients.includes(tag.toLowerCase()) || 
                    appareils.includes(tag.toLowerCase()) || 
                    ustensiles.includes(tag.toLowerCase())
                );

            // Retourner vrai si soit la requête correspond soit les tags correspondent
            return matchesQuery && matchesTags;
        });
    }

    return initialRecipes;  // Retourner les recettes filtrées
}
