class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  saveRecipe(recipe, category) {
    if (!this[category].includes(recipe)) {
      this[category].push(recipe)
    }
  }

  removeRecipe(recipe, category) {
    const i = this[category].indexOf(recipe);
    this[category].splice(i, 1)
  }

  filterFavorites(tag) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(tag);
    });
  }

  findRecipes(stringToSearch, recipes, ingredients) {
    console.log(recipes[0], ingredients[0])
    const matchingRecipes = recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(stringToSearch.toLowerCase())
        // || recipe.ingredients.forEach(recipeIngredient => {
        //   return ingredients.find(ingredient => ingredient.id === recipeIngredient.id)
        // })
    })
    return matchingRecipes
  }

  checkPantry(recipe) {
    //if ingredients are in user pantry, return "You have the ingredients!"
    //if pantry ingredients are missing, return missingIngredientsWithPrice
  }
}

module.exports = User;
