import { expect } from 'chai';

import User from '../src/user.js';
import recipeData from '../src/data/data/recipes.js'
// import Recipe from '../src/recipe.js';

let user1

describe('User', () => {
  beforeEach(() => {
    user1 = new User(1, 'Boba', [
      {
        'ingredient': 1077,
        'amount': 1
      },
      {
        'ingredient': 14412,
        'amount': 1
      },
      {
        'ingredient': 1009054,
        'amount': 3
      }]
    );
  });

  it('should be able to add recipes to favoriteRecipes', () => {
    user1.saveRecipe(recipeData[0], 'favoriteRecipes');
    expect(user1.favoriteRecipes.includes(recipeData[0])).to.eql(true);
  });

  it('should be able to add recipes to recipesToCook', () => {
    user1.saveRecipe(recipeData[1], 'recipesToCook');
    expect(user1.recipesToCook.includes(recipeData[1])).to.eql(true);
  });

  it('should be able to remove recipes from favoriteRecipes', () => {
    user1.removeRecipe(recipeData, 'favoriteRecipes');
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it('should be able to remove recipes from recipesToCook', () => {
    user1.removeRecipe(recipeData, 'recipesToCook');
    expect(user1.recipesToCook).to.eql([]);
  })

  it('should be able to filter through favoriteRecipes by type', () => {
    user1.saveRecipe(recipeData[0], 'favoriteRecipes');
    user1.saveRecipe(recipeData[1], 'favoriteRecipes');
    expect(user1.filterFavorites('antipasti')).to.eql([recipeData[0]]);
  });

  it('should be able to filter through recipesToCook by type', () => {

  });

  it('should be able to search saved recipes by ingredient', () => {
    user1.addToFavorites(recipeData[0]);
    user1.addToFavorites(recipeData[1]);
    expect(user1.findFavorites('egg')).to.eql([recipeData[0]]);
  });

  it('should be able to check ingredients in User/s pantry for a given recipe', () => {
    expect(user1.checkPantry(recipeIngredients)).to.eql('You have the ingredients!');
  });

  it('should inform User if they lack required ingredients for a given recipe', () => {
    expect(user1.checkPantry(recipeIngredients)).to.eql(missingIngredientsWithPrice);
  });
});
