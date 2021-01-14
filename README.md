# What's Cooking Refactor

The requirements for this project can be found in [this project spec](https://frontend.turing.io/projects/module-2/refactor-tractor-wc.html)

## Overview

Our What's Cooking refactor project is an application that serves as a recipe website where a user can track their pantry, favorite recipes, and add recipes to their 'cookbook.' This was the group project for Mod 2 at the Turing School of Software and Design and took place over the course of nine days. The purpose of this project was to learn new technologies while building off of a standalone project to refactor and add missing functionality. We were tasked with implementing several new tools to spruce up the pre-existing What's Cooking repository that we were assigned. 

In order to run this project you must first clone down and set up [this](https://github.com/turingschool-examples/whats-cookin-starter-kit) repository as it is the API used in the project to respond to our fetch requests. 

To run our project on your local machine you must follow the set-up instructions in the above repository. Then clone down this repository, run `npm install` and `npm start`. 

## Learning Goals

__Test Driven Development__

* The provided testing suite was sparse. The few pre-existing test that existed did not pass if they had tests set up at all. 
* The project currently has unit testing for each class and every method that exists inside of those classes.

__Utilizing New Technologies__

*Webpack*

* This was our first exposure to webpack. The webpack was created for us. We simply needed to incorporate the new tools.

*SASS*

* We were tasked with refactoring the CSS by utilizing SASS. 
* We implemented color functions, extensions, mixins, and variables to help DRY up our CSS.
* Reset was used to ensure the application looks the same across browsers that don't support our additional functionality. 

*Async JavaScript*

* The biggest change of the project was removing the local data files and pulling data in from the API (linked above) using the fetch API. Additionally, we were specifically asked to use promises and `.then()` as opposed to `async/await`.
* All user data is fetched on page load using a GET request and `promise.all()`. Classes are instantiated as needed once the data is receieved.
* A user who has enough ingredients to 'cook' a recipe is handled with a POST request.
* `Promise.all()` is incorporated for our posts in two instances because we send an array of requests that returns an array of promises.
* All requests have error handling through `catch` that updates an error message to the DOM. However, the code was constructed so that the user should never see these messages unless error occurs on page load, as they are not able to 'cook' a recipe that they don't have enough ingredients to make. 

__Refactoring__

* The majority of the work done in this project was refactoring to follow SRP, be more DRY, and separate DOM manipulation from JavaScript logic.
* All DOM updates occur in domUpdates.js
* The conditional checks and logic occur in scripts.js
* Classes in the data model were utilized to perform certain functions that manipulated the data client-side, such as filtering recipes by name or verifying if a user's pantry had enough ingredients to cook a recipe.
* The site was not responsive so we added media queries for several screen sizes. 
* Little to no accessibility accomodations were made in the original project. HTML was refactored to be more semantic, and ARIA labels were added where appropriate. Our goal was to score >90% in LightHouse.

__Jumping into a codebase__

* This was our first real experience taking a pre-existing codebase and working on it to refactor, clean-up, and add missing functionality. 

## Using the Site

On page load, a random user is chosen from the user data fetched from the API. They are greeted with a welcome message and shown all the available recipes.

<img width="1083" alt="Screen Shot 2021-01-13 at 4 56 33 PM" src="https://user-images.githubusercontent.com/69563078/104527022-02441f00-55c1-11eb-96e2-2d7fdf9db54d.png">

Atop the recipe cards, a user can click the star button to favorite a recipe. Or the plus button to add it to their cookbook. 

<img width="538" alt="Screen Shot 2021-01-13 at 4 56 53 PM" src="https://user-images.githubusercontent.com/69563078/104527036-07a16980-55c1-11eb-9296-c5f912604f0a.png">

If a user navigates to their favorites or their cookbook and there are no items they are alerted that the respective page is empty and are kept on home. 

<img width="286" alt="Screen Shot 2021-01-13 at 4 57 16 PM" src="https://user-images.githubusercontent.com/69563078/104527043-08d29680-55c1-11eb-8d7c-e877150d841c.png">

The user's pantry displays all of the ingredients in the user's data. 

<img width="417" alt="Screen Shot 2021-01-13 at 4 57 29 PM" src="https://user-images.githubusercontent.com/69563078/104527337-b6de4080-55c1-11eb-8759-125d993ad74c.png">

The search bar filters on a `keyup` event and will only display cards relevant to the page the user is on. If on home, it filters all recipes, if in Favorites or Cookbook it will only filter the recipes that are in the user's favorites or cookbook. 

![Using the search bar](https://user-images.githubusercontent.com/69563078/104527500-1b010480-55c2-11eb-9171-a08468dde18d.gif)


If a user clicks on a recipe they are alerted as to what ingredients they are missing in order to make that recipe. Additionally, they see a list of ingredients, instructions, and the total cost as calculated from the API data for the cost of each ingredient and the amount required in the recipe. 

<img width="391" alt="Screen Shot 2021-01-13 at 4 59 06 PM" src="https://user-images.githubusercontent.com/69563078/104527369-cd849780-55c1-11eb-8a25-f7dbcc99f4c4.png">

If the user has enough ingredients to cook a recipe a button appears allowing them to confirm that they will be cooking that recipe. Ingredients are then removed from the user's pantry. A POST request is made to the API for each ingredient removed and the user's updated pantry is fetched using a GET request. 

<img width="299" alt="Screen Shot 2021-01-13 at 5 01 09 PM" src="https://user-images.githubusercontent.com/69563078/104527063-0ec87780-55c1-11eb-93f4-62240cd814bd.png">

## Wins

This was our first time modifying a pre-existing codebase and we learned A TON from this project. This was also our first exposure to SASS, webpack, and the fetch API. Overall, the project went well. We were able to experiment with assigning independent tasks utilizing our project board and GitHub Issues. The time constraint was tough and several 10+ hour days were required to achieve our desired functionality. 

## Future Iterations

In future iterations we would love to implement a way for users to add ingredients to their pantry. Such as a 'Go Shopping' button where they can record the number of ingredients to add to their pantry. The overall styling wasn't changed *too* much from the original comp due to the time we had, so it would be nice to turn this project into something more visually appealing. 

## References and Technologies

The project was written in HTML, SASS, and JavaScript and bundled through webpack.

Unit testing was accomplished through node.js using Mocha and Chai.

## Authors

[Connie Hong](https://github.com/conconartist)

[Christina Cook](https://github.com/christina-cook)

[Chris Spohn](https://github.com/CJSpohn)

