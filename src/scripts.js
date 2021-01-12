import './css/base.scss';
import './css/styles.scss';

import domUpdates from './domUpdates';

import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';

const favButton = document.querySelector('.view-favorites');
const cookbookButton = document.querySelector('.view-cookbook');
const homeButton = document.querySelector('.home')
const cardArea = document.querySelector('.all-cards');
let user, pantry, cookbook, ingredients;

const instantiateUser = (usersData) => {
  let userId = (Math.floor(Math.random() * 49) + 1);
  let newUser = usersData.find(user => {
    return user.id === Number(userId);
  });
  user = new User(userId, newUser.name, newUser.pantry);
  pantry = new Pantry(newUser.pantry);
}

const getData = () => {
  let usersPromise = fetch('http://localhost:3001/api/v1/users')
    .then(res => res.json());
  let recipesPromise = fetch('http://localhost:3001/api/v1/recipes')
    .then(res => res.json());
  let ingredientsPromise = fetch('http://localhost:3001/api/v1/ingredients')
    .then(res => res.json());

  Promise.all([usersPromise, recipesPromise, ingredientsPromise])
    .then(dataset => {
      instantiateUser(dataset[0]);
      cookbook = new Cookbook(dataset[1]);
      ingredients = dataset[2];
      domUpdates.greetUser(user);
      domUpdates.populateCards(cardArea, cookbook, user);
    });
}

const onStartup = () => {
  getData();
}


window.onload = onStartup();
homeButton.addEventListener('click', () => {
  domUpdates.goToHome(cardArea, cookbook, user, favButton, cookbookButton)
});
favButton.addEventListener('click', () => {
  domUpdates.changePage(event, user, user.favoriteRecipes, cardArea)
});
cardArea.addEventListener('click', (event) => {
  domUpdates.cardButtonConditionals(user, cardArea, favButton, cookbook, event, cookbookButton, ingredients)
});
cookbookButton.addEventListener('click', () => {
  domUpdates.changePage(event, user, user.recipesToCook, cardArea);
})
