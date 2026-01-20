// – взяти https: dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.
//ищу контейнер, в который буду добавлять все рецепты

const recipesDiv = document.getElementById('recipes');

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(dataObject => {
        const {recipes} = dataObject;
        for (const recipe of recipes) {
            const card = document.createElement('div');
            card.classList.add('recipe-card');

            const title = document.createElement('h2');
            title.innerText = `${recipe.id}. ${recipe.name}`;
            card.appendChild(title);

            const ingredientsListTitle = document.createElement('h3');
            ingredientsListTitle.innerText = 'Ingredients:';
            card.appendChild(ingredientsListTitle);

            const ul = document.createElement('ul');
            ul.classList.add('ingredients-list');
            for (const ingredient of recipe.ingredients) {
                const li = document.createElement('li');
                li.innerText = ingredient;
                ul.appendChild(li);
            }
            card.appendChild(ul);

            const instructionTitle = document.createElement('h3');
            instructionTitle.innerText = 'Instructions:';
            card.appendChild(instructionTitle);

            for (const step of recipe.instructions) {
                const instructionLine = document.createElement('p');
                instructionLine.innerText = step;
                card.appendChild(instructionLine);
            }
            const info = document.createElement('p');
            info.innerText =
                    `Preparation time: ${recipe.prepTimeMinutes} min
                    Cook time: ${recipe.cookTimeMinutes} min
                    Servings: ${recipe.servings}
                    Difficulty: ${recipe.difficulty}
                    Cuisine: ${recipe.cuisine}
                    Calories per serving: ${recipe.caloriesPerServing}`;
            card.appendChild(info);
            const {tags} = recipe;

            let tagsText = 'Tags: ';
            let index = 0;

            for (const tag of tags) {
                tagsText = tagsText + tag;
                if (index < tags.length - 1) {
                    tagsText = tagsText + ', ';
                }
                index++;
            }
            const tagsP = document.createElement('p');
            tagsP.innerText = tagsText;
            card.appendChild(tagsP);

            const img = document.createElement('img');
            img.src = recipe.image;
            img.alt = recipe.name;
            card.appendChild(img);

            const info2 = document.createElement('p');
            info2.innerText =
                    `User id: ${recipe.userId}
                    Rating: ${recipe.rating}
                    Review count: ${recipe.reviewCount}`;
            card.appendChild(info2);
            const {mealType} = recipe;
            let mealTitle = 'Meal type: ';
            let mealIndex = 0;

            for (const meal of mealType) {
                mealTitle = mealTitle + meal;
                if (mealIndex < mealType.length - 1) {
                    mealTitle = mealTitle + ', ';
                }
                mealIndex++;
            }
            const mealTypeP = document.createElement('p');
            mealTypeP.innerText = mealTitle;
            card.appendChild(mealTypeP);
            recipesDiv.appendChild(card);
        }
    });
