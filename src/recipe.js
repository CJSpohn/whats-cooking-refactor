class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.ingredients = recipe.ingredients;
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;
  }

  calculateCostAndIngredients() {
    let costCounter = 0;
    let ingredientsUsed = [];
    this.ingredients.forEach(ingredient => {
      this.ingredientsData.find(specificIngredient => {
        if (specificIngredient.id === ingredient.id) {
          costCounter += (Number(specificIngredient.estimatedCostInCents) *
          Number(ingredient.quantity.amount));
          ingredientsUsed.push(specificIngredient.name)
          // investigate Number() further
        }
      })
    });
    return { costCounter, ingredientsUsed };
  }

}

export default Recipe;
