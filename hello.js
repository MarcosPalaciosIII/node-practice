// import the "chalk" package into our program so we can use it
// (sharing code throgh global variables isn't really a thing in Node.js)
var chalk = require('chalk');
      //                  |
      //   npm install chalk

// import "kirby-dance" package into our program so we can use it
var kirbyDance = require('kirby-dance');
                    //          |
              // npm install kirby-dance

var superHeroes = require('superheroes');
var pokemon = require('pokemon');
var logSymbols = require('log-symbols');
var supervillains = require('supervillains');
var nerds = require('nerds');
var catNames = require('cat-names');


console.log(chalk.green('hello, node.js!'));


var arr = [1, 2, 3, 4, 5];


arr.forEach(function (oneNumbah) {
  console.log(chalk.bgYellow('Current number: ' + oneNumbah));
});

console.log(chalk.bgCyan.red('You can combine styles too.'));

console.log(chalk.magenta(kirbyDance(7)));

console.log(superHeroes.random());
console.log(pokemon.random());

console.log(superHeroes.random()+ " " + pokemon.random());
console.log(logSymbols.success, "this is finished!");
console.log(logSymbols.warning, "this is a warning!");
console.log(logSymbols.error, "this is an error!");
console.log(logSymbols.info, "this is for info!");
console.log(logSymbols.success, supervillains.random() + " " + catNames.random());
