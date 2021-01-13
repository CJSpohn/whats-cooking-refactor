import { expect } from 'chai';

import User from '../src/user.js';
import recipeData from '../src/data/data/recipes.js'

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

  it('should be able to filter through favoriteRecipes by tag', () => {
    user1.saveRecipe(recipeData[0], 'favoriteRecipes');
    user1.saveRecipe(recipeData[1], 'favoriteRecipes');
    expect(user1.filterFavorites('antipasti')).to.eql([recipeData[0]]);
  });

  it('should be able to filter through recipesToCook by tag', () => {
    user1.saveRecipe(recipeData[1], 'recipesToCook');
    user1.saveRecipe(recipeData[2], 'recipesToCook');
    expect(user1.filterRecipesToCook('lunch')).to.eql([recipeData[1]]);
  });

  it('should be able to search saved recipes by ingredient', () => {
    user1.saveRecipe(recipeData[5], 'favoriteRecipes');
    user1.saveRecipe(recipeData[3], 'recipesToCook');
    expect(user1.filterFavorites('side dish')).to.eql([recipeData[5]]);
  });
});