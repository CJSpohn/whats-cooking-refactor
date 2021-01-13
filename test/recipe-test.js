import { expect } from 'chai';

import Recipe from '../src/recipe.js';
import recipeData from '../src/data/data/recipes.js';
import ingredientsData from '../src/data/data/ingredients.js';

let recipe;

describe('Recipe', () => {
  beforeEach(() => {

    recipe = new Recipe(recipeData[4], ingredientsData);
  });

  describe('Recipe Data', () => {

    it('should have a list of ingredients', () => {
      expect(recipe.ingredients).to.equal(recipeData[4].ingredients);
    })

    it('should have a type or tag to search', () => {
      expect(recipe.instructions).to.equal(recipeData[4].instructions);
    })
  })

  it('should be able to calculate the cost of its ingredients', () => {
    expect(recipe.calculateCostAndIngredients()).to.eql({
      costCounter: 10122.6,
      ingredientsUsed: [
        'apple cider vinegar',
        'baking powder',
        'brown rice flour',
        'brown rice syrup',
        'oil',
        'egg albumen',
        'evaporated cane juice',
        'flax meal',
        'instant yeast',
        'unsulfured molasses',
        'Potato Starch Flour',
        'salt',
        'tapioca starch',
        'Whole Grain Teff Flour',
        'ice water',
        'xanthan gum'
      ]
    });
  });
});
