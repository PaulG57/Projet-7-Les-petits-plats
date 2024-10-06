
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

/*
const searchInput = document.getElementById("searchBar");
const recipes = [...recipeItems];

function searchRecipes() {
    const searchTerm = searchInput.value.toLowerCase();
  
    // Vérifier si la longueur de la recherche est inférieure à 3 caractères
    if (searchTerm.length < 3) {
      displayAllRecipes();
      return;
    }
  
    const filteredRecipes = recipes.filter((recipe) => {
      const recipeName = recipe.querySelector('.recipe-name').textContent.toLowerCase();
      const recipeIngredients = recipe.querySelector('.recipe-ingredients').textContent.toLowerCase();
  
      return recipeName.includes(searchTerm) || recipeIngredients.includes(searchTerm);
    });
  
    displayFilteredRecipes(filteredRecipes);
  }
  
  function displayAllRecipes() {
    recipes.forEach((recipe) => {
      recipe.style.display = 'block';
    });
  }
  
  function displayFilteredRecipes(filteredRecipes) {
    recipes.forEach((recipe) => {
      if (filteredRecipes.includes(recipe)) {
        recipe.style.display = 'block';
      } else {
        recipe.style.display = 'none';
      }
    });
  }
    */