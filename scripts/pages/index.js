// Afficher les recettes sur la page
function afficherRecettes() {
    const container = document.getElementById("recipes-container");

    // Parcourir chaque recette dans le tableau "recipes"
    recipes.forEach(recette => {
        const recetteDiv = document.createElement("div");
        recetteDiv.classList.add("recipe");

        recetteDiv.innerHTML = `
            <img src="images/recipes/${recette.image}" alt="${recette.name}">
            <h3>Temps: ${recette.time}min</h3>
            <h3>${recette.name}</h3>
            <h3>RECETTE</h3>
            <p>${recette.description}</p>
            <h3>Ingrédients:</h3>
            <ul>
                ${recette.ingredients.map(ing => 
                    `<li>${ing.quantity ? ing.quantity : ''} ${ing.unit ? ing.unit : ''} ${ing.ingredient}</li>`
                ).join('')}
            </ul>
        `;

        container.appendChild(recetteDiv);
    });
}

afficherRecettes();
