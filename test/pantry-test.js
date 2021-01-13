import { expect } from 'chai';

import Pantry from '../src/pantry.js';
import Recipe from '../src/recipe.js';
import recipeData from '../src/data/data/recipes.js';
import ingredientsData from '../src/data/data/ingredients.js';
import users from '../src/data/data/users.js';

let pantry, recipe;

describe('Pantry', () => {
  beforeEach(() => {
    pantry = new Pantry(users[0].pantry);
    recipe = new Recipe(recipeData[4], ingredientsData);
  });

  it('should determine the amount of ingredients still needed to cook a given meal, based on what is in the user\'s pantry', () => {
    expect(pantry.checkPantryForIngredients(recipe)).to.eql([ { ingredient: 'egg albumen', amount: 2, unit: 'large' } ]);
  });
  it('should remove the ingredients used for a given meal from the user\'s pantry, once the meal has been cooked', () => {
    expect(pantry.findItemsToRemove(recipe)).to.eql([
      { id: 2048, amount: 2 },
      { id: 18371, amount: 0.33 },
      { id: 20090, amount: 1.13 },
      { id: 93784, amount: 2 },
      { id: 4582, amount: 0.25 },
      { id: 1124, amount: 3 },
      { id: 93625, amount: 2 },
      { id: 12220, amount: 2 },
      { id: 10118375, amount: 2 },
      { id: 19304, amount: 2 },
      { id: 11413, amount: 0.75 },
      { id: 2047, amount: 0.75 },
      { id: 93696, amount: 0.75 },
      { id: 93760, amount: 0.25 },
      { id: 14412, amount: 1 },
      { id: 93626, amount: 2 }
    ]);
  });
})
