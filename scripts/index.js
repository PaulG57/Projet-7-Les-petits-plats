import { recipes } from "../data/recipes.js";

// Afficher le nombre de recettes sur la page
document.getElementById("nb-recettes").prepend(recipes.length);

// Afficher les recettes sur la page
function afficherRecettes() {
    const container = document.getElementById("recipes-container");

    // Parcourir chaque recette dans le tableau "recipes"
    recipes.forEach(recette => {
        const recetteDiv = document.createElement("div");
        recetteDiv.classList.add("recipe", "card", "mb-5");

        recetteDiv.innerHTML = `
            <img class="card-img-top mb-3" src="images/recipes/${recette.image}" alt="${recette.name}">
            <div class="card-body">
                <h3 class="time">${recette.time}min</h3>
                <h5 class="card-title fw-bold mb-5">${recette.name}</h5>
                <h6 class="card-subtitle mb-1 text-body-secondary">RECETTE</h6>
                <p class="card-text recipe-txt mb-4">${recette.description}</p>
                <h6 class="card-subtitle mb-2 text-body-secondary">INGRÉDIENTS</h6>
                <div class="row">
                ${recette.ingredients.map(ing => 
                    `<div class="col-6 mb-2 pe-0">
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

        container.appendChild(recetteDiv);
    });
}

afficherRecettes();
