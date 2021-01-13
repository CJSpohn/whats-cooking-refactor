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

  getPantry(ingredients) {
    let pantryIngredients = [];
    this.contents.forEach(item => {
      let currentIngredient = ingredients.find(ingredient => ingredient.id === item.ingredient)
      pantryIngredients.push({name: currentIngredient.name, amount: item.amount})
    })
    return pantryIngredients;
  }

  findItemsToRemove(currentRecipe) {
    let itemsToRemove = currentRecipe.ingredients.map(ingredient => {
      return {
        id: ingredient.id,
        amount: Math.round(ingredient.quantity.amount * 100) / 100
      }
    })
    return itemsToRemove;
  }

}

export default Pantry;
