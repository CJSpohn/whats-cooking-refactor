import Recipe from './recipe';

let domUpdates = {

  greetUser(user) {
    const userName = document.querySelector('.user-name');
    userName.innerHTML =
    user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
  },

  applyFavorites(user) {
    const favoriteIds = user.favoriteRecipes.map(recipe => recipe.id);
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
      if (favoriteIds.includes(+card.id)) {
        document.querySelector(`.favorite${card.id}`).classList.add('favorite-active');
      }
    })
  },

  applyCookbook(user) {
    const cookbookIds = user.recipesToCook.map(recipe => recipe.id);
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
      if (cookbookIds.includes(+card.id)) {
        document.querySelector(`.cookbook${card.id}`).classList.add('cookbook-active');
      }
    })
  },

  populateCards(cardArea, cookbook, user) {
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }
    this.drawCards(cookbook.recipes, cardArea, user);
  },

  goToHome(cardArea, cookbook, user, favButton, cookbookButton) {
    this.hideChefLogo();
    document.querySelector('.home-cl').classList.remove('hidden');
    document.querySelector('.error-message').innerText = '';
    this.populateCards(cardArea, cookbook, user);
  },

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
    this.applyFavorites(user);
    this.applyCookbook(user);
  },

  hideChefLogo() {
    const chefLogos = document.querySelectorAll('.chef-logo');
    chefLogos.forEach(logo => {
      logo.classList.add('hidden');
    })
  },

  cardButtonConditionals(user, cardArea, favButton, cookbook, event, cookbookButton, ingredients) {
    if (event.target.classList.contains('favorite')) {
      this.updateFavoriteStatus(user, cardArea, favButton, cookbook, event);
    } else if (event.target.classList.contains('card-picture')) {
      this.displayDirections(event, cookbook, ingredients, cardArea);
    } else if (event.target.classList.contains('add-button')) {
      this.updateCookbookStatus(user, cardArea, cookbookButton, cookbook, event)
    }
  },

  viewFavorites(user, favButton, cardArea, cookbook) {
    const errorMessage = document.querySelector('.error-message');
    errorMessage.innerText = '';
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }
    if (!user.favoriteRecipes.length) {
      errorMessage.innerText = 'You have no favorites!';
      return
    } else {
      this.hideChefLogo();
      document.querySelector('.fav-cl').classList.remove('hidden');
      cardArea.innerHTML = '';
      this.drawCards(user.favoriteRecipes, cardArea, user)
    }
  },

  viewCookbook(user, cookbookButton, cardArea, cookbook) {
    const errorMessage = document.querySelector('.error-message');
    errorMessage.innerText = '';
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }
    if (!user.recipesToCook.length) {
      errorMessage.innerText = 'Your cookbook is empty!'
      return
    } else {
      this.hideChefLogo();
      document.querySelector('.cook-cl').classList.remove('hidden');
      this.drawCards(user.recipesToCook, cardArea, user)
    }
  },

  getRecipe(cookbook, event) {
    return cookbook.recipes.find(recipe => {
      if (recipe.id  === +(event.target.id)) {
        return recipe;
      }
    })
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
    <div class="recipe-container">
    <h2 class="recipe-heading">${currentRecipe.name}</h2>
      <section class="all-recipe-info">
        <p class="cost recipe-info">It will cost: $${costInDollars}</p>
        <p class="ingredients recipe-info">You will need:</p> 
        <p class="instructions recipe-info">Instructions:<p>
        <ol></ol>
      </section>
    </div>
    `;
    let ingredientsSpan = document.querySelector('.ingredients'); // change to ingredientsDisplay
    let instructionsSpan = document.querySelector('.instructions'); // changed to ingredientsInstructions
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
