import './css/base.scss';
import './css/styles.scss';

import domUpdates from './domUpdates';

import Pantry from './pantry';
import Recipe from './recipe';
import User from './user';
import Cookbook from './cookbook';

let favButton = document.querySelector('.view-favorites');
let homeButton = document.querySelector('.home')
let cardArea = document.querySelector('.all-cards');
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
      //DOM UPDATES
      domUpdates.greetUser(user);
      domUpdates.populateCards(cardArea, cookbook.recipes, user);
      //DOM UPDATES
    });
}

const onStartup = () => {
  getData();
}


window.onload = onStartup();
homeButton.addEventListener('click',(event) => {
  domUpdates.cardButtonConditionals(user, cardArea, favButton, cookbook, event)});
favButton.addEventListener('click', () => {
  domUpdates.viewFavorites(user, favButton, cardArea, cookbook)});
cardArea.addEventListener('click', (event) => {
  domUpdates.cardButtonConditionals(user, cardArea, favButton, cookbook, event)});
