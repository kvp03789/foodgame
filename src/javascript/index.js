import '../css/style.css';
import { setDifficulty } from './utils';
import { Customer, Plate, player } from './game';
import { Game } from './flow';
// let difficulty = setDifficulty();
// const newCustomer = new Customer(difficulty, "null", "null");
// const newPlate = new Plate();
    
// newCustomer.makeOrder();
// newPlate.addDrink("tea");
// newPlate.addFood("sushi");
// newCustomer.checkPlate(newPlate, player);
// console.log(newCustomer, newPlate, player.money)
const newGame = new Game()
newGame.gameLoop(newGame)
console.log(newGame)