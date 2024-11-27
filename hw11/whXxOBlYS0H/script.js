/**
 #whXxOBlYS0H
 - взяти https://dummyjson.com/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
 **/

fetch('https://dummyjson.com/recipes')
    .then((response) => response.json())
    .then(({recipes}) => writerRecipes(recipes));

const recipesContainer = document.getElementsByClassName('recipes')[0];

function writerRecipes(recipes) {
    for (const recipe of recipes) {
        const {
            image,
            id,
            name,
            ingredients,
            instructions,
            prepTimeMinutes,
            cookTimeMinutes,
            servings,
            difficulty,
            cuisine,
            caloriesPerServing,
            tags,
            userId,
            rating,
            reviewCount,
            mealType
        } = recipe;
        const recipeItem = document.createElement('div');
        const recipeTitle = document.createElement('h3')
        recipeTitle.innerText = `Recipe: ${name}`;
        const recipeImage = document.createElement('img');
        recipeImage.src = image;
        recipeItem.classList.add('recipe');
        const recipeDetails = document.createElement('div');
        recipeDetails.innerText = `
            id: ${id},
            prepTimeMinutes: ${prepTimeMinutes},
            cookTimeMinutes: ${cookTimeMinutes},
            servings: ${servings},
            difficulty: ${difficulty},
            cuisine: ${cuisine},
            caloriesPerServing: ${caloriesPerServing},
            tags: ${tags},
            userId: ${userId},
            rating: ${rating},
            reviewCount: ${reviewCount},
            mealType: ${mealType}
  `;
        const ingredientTitle = document.createElement('h3')
        ingredientTitle.innerText = 'Ingredients:';
        const ingredientsList = document.createElement('ul');
        for (const ingredient of ingredients) {
            const li = document.createElement('li');
            li.innerText = ingredient;
            ingredientsList.appendChild(li);
        }
        const instructionsTitle = document.createElement('h3')
        instructionsTitle.innerText = 'Instructions:';
        const instructionsList = document.createElement('ol');
        for (const instruction of instructions) {
            const li = document.createElement('li');
            li.innerText = instruction;
            instructionsList.appendChild(li);
        }
        recipeDetails.append(recipeTitle, ingredientTitle, ingredientsList, instructionsTitle, instructionsList, recipeImage);
        recipeItem.append(recipeTitle, recipeImage, recipeDetails);
        recipesContainer.appendChild(recipeItem);
    }
}

