import Recipe from './recipe';

let domUpdates = {

  greetUser(user) {
    const userName = document.querySelector('.user-name');
    const name = user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
    userName.innerHTML = name;
  },

  //NAV BUTTONS
  goToHome(cardArea, cookbook, user) {
    this.hideChefLogos();
    document.querySelector('.home-cl').classList.remove('hidden');
    document.querySelector('.error-message').innerText = '';
    this.drawCards(cookbook.recipes, cardArea, user);
  },

  changePage(event, user, dataset, cardArea) {
    const classList = event.target.classList
    const errorMessage = document.querySelector('.error-message');
    const { error, selector } = this.determinePage(classList);
    if (!dataset.length) {
      return errorMessage.innerText = error
    } else {
      this.displayPage(user, dataset, cardArea, selector)
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
    }
    return { error, selector }
  },

  displayPage(user, dataset, cardArea, selector) {
    this.hideChefLogos();
    document.querySelector(selector).classList.remove('hidden');
    cardArea.innerHTML = '';
    this.drawCards(dataset, cardArea, user)
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
      <p id='${recipe.id}' class='recipe-name'>${recipe.name}</p>
      <img id='${recipe.id}' tabindex='0' class='card-picture' src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
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
  cardButtonConditionals(user, cardArea, favButton, cookbook, event, ingredients) {
    if (event.target.classList.contains('favorite')) {
      this.updateButtonStatus(user, cardArea, cookbook, event);
    } else if (event.target.classList.contains('card-picture')) {
      this.displayDirections(event, cookbook, ingredients, cardArea);
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
  displayDirections(event, cookbook, ingredients, cardArea) {
    let newRecipeInfo = this.getRecipe(cookbook, event);
    let currentRecipe = new Recipe(newRecipeInfo, ingredients);
    let recipeInformation = currentRecipe.calculateCostAndIngredients()
    let cost = recipeInformation.costCounter;
    let costInDollars = (cost / 100).toFixed(2);
    let ingredientsUsed = recipeInformation.ingredientsUsed;
    this.showRecipeInformation(cardArea, currentRecipe, costInDollars);
    this.populateIngredients(currentRecipe, ingredientsUsed);
    this.populateInstructions(currentRecipe);
  },

  showRecipeInformation(cardArea, currentRecipe, costInDollars) {
    cardArea.innerHTML = `
    <h3>${currentRecipe.name}</h3>
      <p class='all-recipe-info'><strong>It will cost: </strong>
      <span class='cost recipe-info'>$${costInDollars}</span><br><br>
      <strong>You will need: </strong><span class='ingredients recipe-info'></span>
      <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
      </span></ol>
      </p>`;
  },

  populateIngredients(currentRecipe, ingredientsUsed) {
    let ingredientsSpan = document.querySelector('.ingredients');
    currentRecipe.ingredients.forEach((ingredient, index) => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `
      <ul>
        <li>${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
        ${ingredientsUsed[index]}</li>
      </ul>
      `)
    })
  },

  populateInstructions(currentRecipe) {
    let instructionsSpan = document.querySelector('.instructions');
    currentRecipe.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', `
      <li>${instruction.instruction}</li>
      `)
    })
  },

  searchRecipesByNameOrIngredient(user, string, recipes, ingredients, cardArea) {
    const matchingRecipes = user.findRecipes(string, recipes, ingredients);
    this.drawCards(matchingRecipes, cardArea, user)
  }
}

export default domUpdates;
