let domUpdates = {

  greetUser(user) {
    const userName = document.querySelector('.user-name');
    userName.innerHTML =
    user.name.split(' ')[0] + ' ' + user.name.split(' ')[1][0];
  },

  applyFavorites(user) {
    if (user.favoriteRecipes.length) {
      user.favoriteRecipes.forEach(recipe => {
        document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active');
      })
    }
  },

  applyCookbook(user) {
    if (user.recipesToCook.length) {
      user.recipesToCook.forEach(recipe => {
        document.querySelector(`.cookbook${recipe.id}`).classList.add('cookbook-active');
      })
    }
  },

  populateCards(cardArea, cookbook, user) {
    cardArea.innerHTML = '';
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }
    this.drawCards(cookbook.recipes, cardArea, user);
  },

  goToHome(cardArea, cookbook, user, favButton) {
    favButton.innerHTML = 'View Favorites';
    this.populateCards(cardArea, cookbook, user);
  },

  drawCards(data, cardArea, user) {
    data.forEach(recipe => {
      cardArea.insertAdjacentHTML('afterbegin', `
      <div id='${recipe.id}' class='card'>
        <header id='${recipe.id}' class='card-header'>
          <button id='${recipe.id}' aria-label='add-button' class='add-button cookbook${recipe.id} card-button'>
          </button>
          <button id='${recipe.id}' aria-label='favorite-button' class='favorite favorite${recipe.id} card-button'></button>
        </header>
        <p id='${recipe.id}' class='recipe-name'>${recipe.name}</p>
        <img id='${recipe.id}' tabindex='0' class='card-picture' src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
      </div>`)
    });
    this.applyFavorites(user);
    this.applyCookbook(user)
  },

  cardButtonConditionals(user, cardArea, favButton, cookbook, event, cookbookButton) {
    if (event.target.classList.contains('favorite')) {
      this.updateFavoriteStatus(user, favButton, cookbook, event);
    } else if (event.target.classList.contains('card-picture')) {
      this.displayDirections(event);
    } else if (event.target.classList.contains('add-button')) {
      this.updateCookbookStatus(user, cookbookButton, cookbook, event)
    }
  },

  viewFavorites(user, favButton, cardArea, cookbook) {
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }
    if (!user.favoriteRecipes.length) {
      favButton.innerHTML = 'You have no favorites!';
      this.populateCards(cardArea, cookbook, user);
      return
    } else {
      favButton.innerHTML = 'Refresh Favorites'
      cardArea.innerHTML = '';
      this.drawCards(user.favoriteRecipes, cardArea, user)
    }
  },

  viewCookbook(user, cookbookButton, cardArea, cookbook) {
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }
    if (!user.recipesToCook.length) {
      cookbookButton.innerHTML = 'You have no recipes to cook!';
      this.populateCards(cardArea, cookbook, user);
      return
    } else {
      cookbookButton.innerHTML = 'Refresh Cookbook'
      cardArea.innerHTML = '';
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

  updateCookbookStatus(user, cookbookButton, cookbook, event) {
    let specificRecipe = this.getRecipe(cookbook, event);
    if (!event.target.classList.contains('cookbook-active')) {
      event.target.classList.add('cookbook-active');
      cookbookButton.innerHTML = 'View Cookbook';
      user.saveRecipe(specificRecipe, 'recipesToCook');
    } else {
      event.target.classList.remove('cookbook-active');
      user.removeRecipe(specificRecipe, 'recipesToCook')
    }
  },

  updateFavoriteStatus(user, favButton, cookbook, event) {
    let specificRecipe = this.getRecipe(cookbook, event);
    if (!event.target.classList.contains('favorite-active')) {
      event.target.classList.add('favorite-active');
      favButton.innerHTML = 'View Favorites';
      user.saveRecipe(specificRecipe, 'favoriteRecipes');
    } else {
      event.target.classList.remove('favorite-active');
      user.removeRecipe(specificRecipe, 'favoriteRecipes')
    }
  },

  displayDirections(event) {
    let newRecipeInfo = cookbook.recipes.find(recipe => {
      if (recipe.id === Number(event.target.id)) {
        return recipe;
      }
    })
    let recipeObject = new Recipe(newRecipeInfo, ingredientsData);
    let cost = recipeObject.calculateCost()
    let costInDollars = (cost / 100).toFixed(2)
    cardArea.classList.add('all');
    cardArea.innerHTML = `
    <h3>${recipeObject.name}</h3>
      <p class='all-recipe-info'><strong>It will cost: </strong>
      <span class='cost recipe-info'>$${costInDollars}</span><br><br>
      <strong>You will need: </strong><span class='ingredients recipe-info'></span>
      <strong>Instructions: </strong><ol><span class='instructions recipe-info'>
      </span></ol>
      </p>`;
    let ingredientsSpan = document.querySelector('.ingredients');
    let instructionsSpan = document.querySelector('.instructions');
    recipeObject.ingredients.forEach(ingredient => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `
      <ul>
        <li>${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
        ${ingredient.name}</li>
      </ul>
      `)
    })
    recipeObject.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', `
      <li>${instruction.instruction}</li>
      `)
    })
  }
}

export default domUpdates;
