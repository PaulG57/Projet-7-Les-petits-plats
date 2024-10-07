export function createCardsDOM(recipes) {
    return recipes.map(recipe => {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe", "card", "mb-5");

        recipeDiv.innerHTML = `
            <img class="card-img-top mb-3" src="images/recipes/${recipe.image}" alt="${recipe.name}">
            <div class="card-body">
                <h3 class="time">${recipe.time}min</h3>
                <h5 class="card-title fw-bold mb-4">${recipe.name}</h5>
                <h6 class="card-subtitle mb-1 text-body-secondary">RECETTE</h6>
                <p class="card-text recipe-txt mb-4">${recipe.description}</p>
                <h6 class="card-subtitle mb-2 text-body-secondary">INGRÉDIENTS</h6>
                <div class="row mb-4 ingredients">
                ${recipe.ingredients.map(ing => 
                    `<div class="col-6 mb-3 pe-0">
                            <div class="ingredient-name">${ing.ingredient}</div>
                            <div class="ingredient-quantity text-secondary">
                                ${ing.quantity ? ing.quantity : ''} 
                                ${ing.unit ? ing.unit : ''}
                            </div>
                    </div>`
                ).join('')}
                </div>
            </div>
        `;
    return recipeDiv;
    })
    
}