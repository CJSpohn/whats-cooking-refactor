import { expect } from 'chai';

import Recipe from '../src/recipe.js';
import recipeData from '../src/data/data/recipes.js';
import ingredientsData from '../src/data/data/ingredients.js';

let recipe;

describe('Recipe', () => {
  beforeEach(() => {

    recipe = new Recipe(recipeData[47], ingredientsData);
  });

  describe('Recipe Data', () => {

    it('should have a list of ingredients', () => {
      expect(recipe.ingredients).to.equal(recipeData[47].ingredients);
    })

    it('should have a type or tag to search', () => {
      expect(recipe.instructions).to.equal(recipeData[47].instructions);
    })
  })

  it('should be able to calculate the cost of its ingredients', () => {
    expect(recipe.calculateCost()).to.equal(4166);
  });
  it('should be able to access instructions for a recipe', () => {

  });
});
