const coffeeMenu = require("./coffee_data");

// 2. Print an array of all the drinks on the menu.
const allDrinks = coffeeMenu.map((drink) => drink.name);
console.log(allDrinks);

// 3. Print an array of drinks that cost 5 and under.
const cheapDrinks = coffeeMenu.filter((drink) => drink.price <= 5).map((drink) => drink.name);
console.log(cheapDrinks);

// 4. Print an array of drinks that are priced at an even number.
const evenPricedDrinks = coffeeMenu.filter((drink) => drink.price % 2 === 0).map((drink) => drink.name);
console.log(evenPricedDrinks);

// 5. Print the total if you were to order one of every drink.
const total = coffeeMenu.reduce((acc, drink) => acc + drink.price, 0);
console.log(total);

// 6. Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal).map((drink) => drink.name);
console.log(seasonalDrinks);

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name.
const seasonalDrinksWithBeans = coffeeMenu
  .filter((drink) => drink.seasonal)
  .map((drink) => `${drink.name} with imported beans`);
console.log(seasonalDrinksWithBeans);
