export function search() {
    const searchInput = document.getElementById("searchBar");
    const recipes = document.querySelectorAll(".recipe");

    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();
  
        if (searchTerm.length >= 3) {

            recipes.forEach((recipe) => {
            const recipeName = recipe.querySelector('.card-title').textContent.toLowerCase();
            const recipeIngredients = recipe.querySelector('.ingredients').textContent.toLowerCase();
        
            if (recipeName.includes(searchTerm) || recipeIngredients.includes(searchTerm)) {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none';
            }
            });
        }
    });
}
