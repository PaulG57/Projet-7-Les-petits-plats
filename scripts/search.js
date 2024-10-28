export function searchRecipes(query, recipes, selectedTags = []) {
    const normalizedQuery = query.toLowerCase().trim();
    const filteredRecipes = [];

    // Boucle sur les recettes avec for...of
    for (const recipe of recipes) {
        const recipeName = recipe.name.toLowerCase();
        const description = recipe.description.toLowerCase();
        const ingredients = recipe.ingredients.map(ing => ing.ingredient.toLowerCase());
        const appliance = recipe.appliance.toLowerCase();
        const ustensils = recipe.ustensils.map(ust => ust.toLowerCase());

        // Vérifie si la recette correspond à la recherche
        const matchesQuery = normalizedQuery.length < 3 || 
            recipeName.includes(normalizedQuery) ||
            description.includes(normalizedQuery) ||
            ingredients.some(ing => ing.includes(normalizedQuery));

        // Vérifie les tags
        let matchesTags = true;
        for (const tag of selectedTags) {
            const tagLower = tag.toLowerCase();
            if (!ingredients.includes(tagLower) && appliance !== tagLower && !ustensils.includes(tagLower)) {
                matchesTags = false;
                break;
            }
        }

        // Ajoute la recette si elle correspond à la recherche et aux tags
        if (matchesQuery && matchesTags) {
            filteredRecipes.push(recipe);
        }
    }

    return filteredRecipes;
}