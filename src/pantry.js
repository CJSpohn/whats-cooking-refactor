class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }

  checkPantryForIngredients(recipe) {
    let ingredientsNeeded = [];
    recipe.ingredients.forEach(recipeIngredient => {
      this.contents.forEach(pantryIngredient => {
        if (pantryIngredient.ingredient === recipeIngredient.id) {
          if (pantryIngredient.amount < recipeIngredient.quantity.amount) {
            let amountNeeded = recipeIngredient.quantity.amount - pantryIngredient.amount;
            let ingredientName = recipe.ingredientsData.find(ingredient => ingredient.id === pantryIngredient.ingredient).name;
            ingredientsNeeded.push({
              ingredient: ingredientName,
              amount: amountNeeded,
              unit: recipeIngredient.quantity.unit})
          }
        }
      })
    })
    return ingredientsNeeded;
  }
}

export default Pantry;
