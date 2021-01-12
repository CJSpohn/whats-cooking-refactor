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

  //filterRecipesToCook by type?

  findRecipes(strgToSrch) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.name.includes(strgToSrch)
      || recipe.ingredients.find(ingredient => {
        return ingredient.name.includes(strgToSrch)
      });
    });
  }

  checkPantry(recipe) {
    //if ingredients are in user pantry, return "You have the ingredients!"
    //if pantry ingredients are missing, return missingIngredientsWithPrice
  }
}

module.exports = User;
