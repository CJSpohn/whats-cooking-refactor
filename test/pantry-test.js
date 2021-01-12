import { expect } from 'chai';

import Pantry from '../src/pantry.js';
import Recipe from '../src/recipe.js';
import recipeData from '../src/data/data/recipes.js';
import ingredientsData from '../src/data/data/ingredients.js';

let pantry;

describe('Pantry', () => {
    beforeEach(() => {
        pantry = new Pantry(userId); // access user data to find pantry property
    });
    it('should determine whether there are enough ingredients in the pantry to cook a given meal', () => {

    });    
    it('should determine the amount of ingredients still needed to cook a given meal, based on what is in the user\'s pantry', () => {

    });
    it('should remove the ingredients used for a given meal from the user\'s pantry, once the meal has been cooked,' () => {

    });
    it('should only remove ingredients if the user has a list of meals to cook,' () => {

    });
    }
})