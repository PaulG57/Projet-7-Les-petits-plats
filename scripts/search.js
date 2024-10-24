export function searchRecipes(query, recipes, selectedTags = []) {
    const normalizedQuery = query.toLowerCase().trim();

    // Si moins de 3 caractères et pas de tags, retourne toutes les recettes
    if (normalizedQuery.length < 3 && selectedTags.length === 0) return recipes;

    return recipes.filter(recipe => {
        const recipeName = recipe.name.toLowerCase();
        const description = recipe.description.toLowerCase();
        const ingredients = recipe.ingredients.map(ing => ing.ingredient.toLowerCase());
        const appareils = recipe.appliance.toLowerCase();
        const ustensiles = recipe.ustensils.map(ust => ust.toLowerCase());

        // Filtrage par requête
        const matchesQuery = normalizedQuery.length < 3 || 
            recipeName.includes(normalizedQuery) ||
            description.includes(normalizedQuery) ||
            ingredients.some(ing => ing.includes(normalizedQuery));

        // Filtrage par tags
        const matchesTags = selectedTags.every(tag => 
            ingredients.includes(tag.toLowerCase()) ||
            appareils.includes(tag.toLowerCase()) ||
            ustensiles.includes(tag.toLowerCase())
        );

        // Retourner vrai si les deux correspondent
        return matchesQuery && matchesTags;
    });
}
