export function createMealCards(meals) {
    return meals
        .map(({ strMealThumb, strMeal, idMeal }) => {
            return (
                `<li class="meal__card" id="${idMeal}">
            <img class="meal__pic" src="${strMealThumb}" alt="${strMeal}" />
            <p class="meal__desc">${strMeal}</p>
            </div>
          </li>`
            );
        })
        .join('');
}
