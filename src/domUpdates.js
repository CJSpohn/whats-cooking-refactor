import Recipe from './recipe';

let domUpdates = {

  greetUser(user) {
    const userName = document.querySelector('.user-name');
    const name = user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
    userName.innerHTML = name;
  },

  //NAV BUTTONS
  changePage(event, user, dataset, cardArea, pantry, ingredients) {
    this.hideRecipeDetails();
    this.hideSuccessMessage();
    this.hideCookButton()
    const classList = event.target.classList
    const errorMessage = document.querySelector('.error-message');
    const { error, selector } = this.determinePage(classList);
    if (!dataset.length) {
      return errorMessage.innerText = error
    } else {
      this.displayPage(user, dataset, cardArea, selector, pantry, ingredients)
    }
  },

  determinePage(classList) {
    let error, selector;
    if (classList.contains('view-favorites')) {
      error = 'You have no favorites!';
      selector = '.fav-cl';
    } else if (classList.contains('view-cookbook')) {
      error = 'Your cookbook is empty!';
      selector = '.cook-cl';
    } else if (classList.contains('view-pantry')) {
      document.querySelector('.error-message').innerText = '';
      selector = '.pantry-cl';
    }
    return { error, selector }
  },

  displayPage(user, dataset, cardArea, selector, pantry, ingredients) {
    this.hideChefLogos();
    document.querySelector(selector).classList.remove('hidden');
    cardArea.innerHTML = '';
    if (selector === '.pantry-cl') {
      let itemsInPantry = pantry.getPantry(ingredients);
      this.displayPantry(itemsInPantry);
    } else {
      this.drawCards(dataset, cardArea, user);
    }
  },

  displayPantry(itemsInPantry) {
    let pantryDisplay = document.querySelector('.ingredients-list');
    pantryDisplay.innerHTML += `
      <h2 class="recipe-heading">Items in Pantry</h2>`
    itemsInPantry.forEach(item => {
      pantryDisplay.innerHTML += `
          <p class="pantry-list">${item.name}: ${item.amount}</p>
        `
    })
  },

  hideRecipeDetails() {
    let missingIngredientsSection = document.querySelector('.ingredients-list');
    let recipeArea = document.querySelector('.recipe-area');
    missingIngredientsSection.innerHTML = '';
    recipeArea.innerHTML = '';
  },

  hideChefLogos() {
    const chefLogos = document.querySelectorAll('.chef-logo');
    chefLogos.forEach(logo => {
      logo.classList.add('hidden');
    })
  },

  clearError() {
    document.querySelector('.error-message').innerText = '';
  },

  //CARD DISPLAY
  drawCards(data, cardArea, user) {
    cardArea.innerHTML = '';
    data.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', `
      <div id='${recipe.id}' class='card'>
        <header id='${recipe.id}' class='card-header'>
          <button id='${recipe.id}' aria-label='add-button' class='add-button cookbook${recipe.id} card-button'></button>
          <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'></button>
        </header>
        <img id='${recipe.id}' tabindex='0' class='card-picture' src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
        <p id='${recipe.id}' class='recipe-name'>${recipe.name}</p>
      </div>`)
    });
    this.applyIconStatus(user);
  },

  applyIconStatus(user) {
    const favoriteIds = user.favoriteRecipes.map(recipe => recipe.id);
    const cookbookIds = user.recipesToCook.map(recipe => recipe.id);
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
      if (favoriteIds.includes(+card.id)) {
        document.querySelector(`.favorite${card.id}`).classList.add('favorite-active');
      };
      if (cookbookIds.includes(+card.id)) {
        document.querySelector(`.cookbook${card.id}`).classList.add('cookbook-active');
      };
    });
  },

  //CARD BUTTONS
  cardButtonConditionals(user, cardArea, cookbook, event, ingredients, pantry, currentRecipe) {
    if (event.target.classList.contains('favorite')) {
      this.updateButtonStatus(user, cardArea, cookbook, event);
    } else if (event.target.classList.contains('card-picture')) {
      this.displayDirections(event, cookbook, ingredients, cardArea, pantry, currentRecipe);
    } else if (event.target.classList.contains('add-button')) {
      this.updateButtonStatus(user, cardArea, cookbook, event)
    }
  },

  updateButtonStatus(user, cardArea, cookbook, event) {
    const { dataset, selector, active } = this.determineButton(event);
    const specificRecipe = this.getRecipe(cookbook, event);
    if (!event.target.classList.contains(active)) {
      user.saveRecipe(specificRecipe, dataset);
      this.clearError();
    } else {
      user.removeRecipe(specificRecipe, dataset);
      this.applyLiveChangeToPage(selector, dataset, cardArea, user);
    }
    event.target.classList.toggle(active);
  },

  determineButton(event) {
    let dataset, selector, active;
    if (event.target.classList.contains('add-button')) {
      dataset = 'recipesToCook';
      selector = '.cook-cl';
      active = 'cookbook-active';
    } else if (event.target.classList.contains('favorite')) {
      dataset = 'favoriteRecipes';
      selector = '.fav-cl';
      active = 'favorite-active';
    }
    return { dataset, selector, active };
  },

  applyLiveChangeToPage(selector, dataset, cardArea, user) {
    const chefLogo = document.querySelector(selector);
    if (!chefLogo.classList.contains('hidden')) {
      this.drawCards(user[dataset], cardArea, user);
    }
  },

  getRecipe(cookbook, event) {
    return cookbook.recipes.find(recipe => {
      if (recipe.id  === +(event.target.id)) {
        return recipe;
      }
    })
  },

  //RECIPE INFORMATION
  displayDirections(event, cookbook, ingredients, cardArea, pantry, currentRecipe) {
    let newRecipeInfo = this.getRecipe(cookbook, event);
    currentRecipe = new Recipe(newRecipeInfo, ingredients);
    let recipeInformation = currentRecipe.calculateCostAndIngredients()
    let cost = recipeInformation.costCounter;
    let costInDollars = (cost / 100).toFixed(2);
    let ingredientsUsed = recipeInformation.ingredientsUsed;
    this.showRecipeInformation(cardArea, currentRecipe, costInDollars);
    this.populateIngredients(currentRecipe, ingredientsUsed);
    this.populateInstructions(currentRecipe);
    let missingIngredients = pantry.checkPantryForIngredients(currentRecipe);
    if (!missingIngredients.length) {
      this.revealCookButton();
    } else {
      this.displayMissingIngredients(missingIngredients);
    }
  },

  displayMissingIngredients(missingIngredients) {
    let missingIngredientsSection = document.querySelector('.ingredients-list');
    missingIngredients.forEach(ingredient => {
      missingIngredientsSection.innerHTML += `
        <p class="all-recipe-info">You will need ${ingredient.amount} ${ingredient.unit} of ${ingredient.ingredient}</p>
        `;
    })
  },

  revealCookButton() {
    let cookButton = document.querySelector('.cook-recipe');
    cookButton.classList.remove('hidden');
  },

  hideCookButton() {
    let cookButton = document.querySelector('.cook-recipe');
    cookButton.classList.add('hidden');
  },

  showSuccessMessage(message) {
    const successMessage = document.querySelector('.success-message');
    successMessage.classList.remove('hidden');
    successMessage.innerHTML = `
    <p class="success-text">${message}</p>
    `
  },

  hideSuccessMessage() {
    const successMessage = document.querySelector('.success-message');
    successMessage.innerHTML = '';
    successMessage.classList.add('hidden');
  },

  showRecipeInformation(cardArea, currentRecipe, costInDollars) {
    let recipeArea = document.querySelector('.recipe-area')
    recipeArea.innerHTML += `
      <h2 class="recipe-heading">${currentRecipe.name}</h2>
      <section class="all-recipe-info">
        <p class="cost recipe-info">This recipe will cost: $${costInDollars}</p>
        <p id="${currentRecipe.id}" class="ingredients recipe-info">You will need:</p>
        <ul class="ingredients-list"></ul>
        <p class="instructions recipe-info">Instructions:<p>
        <ol class="instructions-list"></ol>
      </section>
      `;
    cardArea.innerHTML = '';
  },

  populateIngredients(currentRecipe, ingredientsUsed) {
    let ingredientsDisplay = document.querySelector('.ingredients');
    currentRecipe.ingredients.forEach((ingredient, index) => {
      ingredientsDisplay.innerHTML += `
        <li>${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
        ${ingredientsUsed[index]}</li>
      `
    })
  },

  populateInstructions(currentRecipe) {
    let ingredientsInstructions = document.querySelector('.instructions-list');
    currentRecipe.instructions.forEach(instruction => {
      ingredientsInstructions.innerHTML += `
      <li>${instruction.instruction}</li>
      `
    })
  },

  searchRecipesByNameOrIngredient(user, string, recipes, ingredients, cardArea) {
    const matchingRecipes = user.findRecipes(string, recipes, ingredients);
    this.drawCards(matchingRecipes, cardArea, user)
  }
}

export default domUpdates;
