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
    this.verifyCardArea(cardArea);
    document.querySelector('.home-cl').classList.remove('hidden');
    document.querySelector('.error-message').innerText = '';
    this.drawCards(cookbook.recipes, cardArea, user);
  },

  changePage(event, user, dataset, cardArea) {
    this.verifyCardArea(cardArea);
    const classList = event.target.classList
    const errorMessage = document.querySelector('.error-message');
    const { error, selector } = this.determinePage(classList);
    if (!dataset.length) {
      return errorMessage.innerText = error
    } else {
      this.displayPage(user, dataset, cardArea, error, selector)
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

  displayPage(user, dataset, cardArea, error, selector) {
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

  verifyCardArea(cardArea) {
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }
  },

  //CARD BUTTONS
  cardButtonConditionals(user, cardArea, favButton, cookbook, event, cookbookButton, ingredients) {
    if (event.target.classList.contains('favorite')) {
      this.updateFavoriteStatus(user, cardArea, favButton, cookbook, event);
    } else if (event.target.classList.contains('card-picture')) {
      this.displayDirections(event, cookbook, ingredients, cardArea);
    } else if (event.target.classList.contains('add-button')) {
      this.updateCookbookStatus(user, cardArea, cookbookButton, cookbook, event)
    }
  },


  updateCookbookStatus(user, cardArea, cookbookButton, cookbook, event) {
    let specificRecipe = this.getRecipe(cookbook, event);
    if (!event.target.classList.contains('cookbook-active')) {
      event.target.classList.add('cookbook-active');
      document.querySelector('.error-message').innerText = '';
      user.saveRecipe(specificRecipe, 'recipesToCook');
    } else {
      event.target.classList.remove('cookbook-active');
      user.removeRecipe(specificRecipe, 'recipesToCook')
      const chefLogo = document.querySelector('.cook-cl');
      if (!chefLogo.classList.contains('hidden')) {
        this.drawCards(user.recipesToCook, cardArea, user);
      }
    }
  },

  updateFavoriteStatus(user, cardArea, favButton, cookbook, event) {
    let specificRecipe = this.getRecipe(cookbook, event);
    if (!event.target.classList.contains('favorite-active')) {
      event.target.classList.add('favorite-active');
      document.querySelector('.error-message').innerText = '';
      user.saveRecipe(specificRecipe, 'favoriteRecipes');
    } else {
      event.target.classList.remove('favorite-active');
      user.removeRecipe(specificRecipe, 'favoriteRecipes');
      const chefLogo = document.querySelector('.fav-cl');
      if (!chefLogo.classList.contains('hidden')) {
        this.drawCards(user.favoriteRecipes, cardArea, user);
      }
    }
  },
  
  getRecipe(cookbook, event) {
    return cookbook.recipes.find(recipe => {
      if (recipe.id  === +(event.target.id)) {
        return recipe;
      }
    })
  },

  displayDirections(event, cookbook, ingredients, cardArea) {
    let newRecipeInfo = cookbook.recipes.find(recipe => {
      if (recipe.id === Number(event.target.id)) {
        return recipe;
      }
    })
    let currentRecipe = new Recipe(newRecipeInfo, ingredients);
    let recipeInformation = currentRecipe.calculateCostAndIngredients()
    let cost = recipeInformation.costCounter;
    let ingredientsUsed = recipeInformation.ingredientsUsed;
    let costInDollars = (cost / 100).toFixed(2);
    cardArea.classList.add('all');
    cardArea.innerHTML = `
    <h3>${currentRecipe.name}</h3>
      <p class='all-recipe-info'><strong>It will cost: </strong>
      <span class='cost recipe-info'>$${costInDollars}</span><br><br>
      <strong>You will need: </strong><span class='ingredients recipe-info'></span>
      <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
      </span></ol>
      </p>`;
    let ingredientsSpan = document.querySelector('.ingredients');
    let instructionsSpan = document.querySelector('.instructions');
    currentRecipe.ingredients.forEach((ingredient, index) => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `
      <ul>
        <li>${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
        ${ingredientsUsed[index]}</li>
      </ul>
      `)
    })
    currentRecipe.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', `
      <li>${instruction.instruction}</li>
      `)
    })
  }
}

export default domUpdates;
