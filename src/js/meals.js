const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
mealList.addEventListener('click', addMealToFavorite);

recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});


// get meal list that matches with the ingredients
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                        </div>
                        <div class = "meal-buttons">
                            <button type="button" class="recipe-btn">Get Recipe</button>
                            <button type="button" class="favorite-btn">Add to favorite</button>
                        </div>
                    </div>
                `;
                });
                mealList.classList.remove('notFound');
            } else {
                html = "Sorry, we didn't find any meal!";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
            setFavorites()
        });
}


// get recipe of the meal
function getMealRecipe(e) {
    if (e.target.classList.contains('recipe-btn')) {
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
            .then(response => response.json())
            .then(data => mealRecipeModal(data.meals));
    }
}
function addMealToFavorite(e) {
    if (e.target.classList.contains('favorite-btn')) {
        let mealItem = e.target.parentElement.parentElement.dataset.id;

        const favorites = JSON.parse(localStorage.getItem("favorites")) || []

        if (e.target.classList.contains('removeFavorite-btn')) {
            const updatedFavorites = favorites.filter(meal => meal !== mealItem);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites))

            e.target.classList.remove('removeFavorite-btn');
            e.target.textContent = "Add to favorite"
        } else {
            favorites.push(mealItem)
            localStorage.setItem("favorites", JSON.stringify(favorites))

            e.target.classList.add('removeFavorite-btn');
            e.target.textContent = "Remove from favorite"
        }

    }
}
// create a modal
function mealRecipeModal(meal) {
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}


function setFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favorites.forEach(function (favorite) {
        const meal = document.querySelector(`[data-id="${favorite}"]`);
        meal.querySelector(".favorite-btn").classList.add('removeFavorite-btn');
        meal.querySelector(".favorite-btn").textContent = "Remove from favorite"
    });
}