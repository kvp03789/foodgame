import '../css/style.css';
import { nameArray } from './utils';
import { Customer, Plate, player } from './game';
import { Game } from './flow';
import { makeBurgerStationDom } from './dom';
import { dragAndDrop } from './draganddrop';
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
//makeBurgerStationDom();
dragAndDrop()