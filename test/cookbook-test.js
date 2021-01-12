import {expect} from 'chai';

import recipeData from '../src/data/data/recipes.js';
import Cookbook from '../src/cookbook.js';

let cookbook;

describe('User', () => {
  beforeEach(() => {
    cookbook = new Cookbook(recipeData);
  });

  it('should have an array of all recipes', () => {
    expect(cookbook.recipes).to.be.an('array');
  });

  describe('findRecipe', () => {
    it('should be able to filter through its array by ingredients', () => {
      expect(cookbook.findRecipe('yolk').length).to.equal(2);
    });

    it('should be able to filter through its array by name', () => {
      expect(cookbook.findRecipe('Sesame Cookies').length).to.equal(1);
    });
  });
})
