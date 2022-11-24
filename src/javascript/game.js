import { newGame } from './index.js'
import {generateRandom} from './utils.js'
import { clearQueue, makeCustomerDom } from './dom.js'

export class Customer {
    constructor(difficulty, foodRequest, drinkRequest, name){
        this.difficulty = difficulty
        this.foodRequest = foodRequest
        this.drinkRequest = drinkRequest
        this.name = name
        this.order = []
    }

    makeOrder(){
        this.makeFoodRequest();
        this.makeDrinkRequest();
        if(this.foodRequest === "burger"){
            this.makeBurgerRequest();
            this.order.push(this.foodRequest);
            this.order.push(this.drinkRequest);
        }else if(this.foodRequest === "sushi"){
            this.makeSushiRequest();
            this.order.push(this.foodRequest);
            this.order.push(this.drinkRequest);
        }else if(this.foodRequest === "pizza"){
            this.makePizzaRequest();
            this.order.push(this.foodRequest);
            this.order.push(this.drinkRequest);
        }else if(this.foodRequest === "pastry"){
            this.makePastryRequest();
            this.order.push(this.foodRequest);
            this.order.push(this.drinkRequest);
        }
        //this.startTimer()
    }

    makeFoodRequest(){
        let num = generateRandom(1, 4);
        if (num === 1){
            this.foodRequest = "burger";
        }else if(num === 2){
            this.foodRequest = "sushi";
        }else if(num === 3){
            this.foodRequest = "pizza";
        }else if(num === 4){
            this.foodRequest = "pastry";
        }
    }
    makeDrinkRequest() {
        let num = generateRandom(1, 4);
        if (num === 1){
            this.drinkRequest = "coffee";
        }else if(num === 2){
            this.drinkRequest = "tea"
        }else if(num === 3){
            this.drinkRequest = "milkshake"
        }else if(num === 4){
            this.drinkRequest = "soda"
        }
    }

    makeBurgerRequest(){
        let lettuce = generateRandom(0, 1);
        let tomato = generateRandom(0, 1);
        let onion = generateRandom(0, 1);
        this.foodRequest = new Burger(lettuce, tomato, onion);
    }

    makeSushiRequest(){
        let tuna = generateRandom(0, 1);
        let salmon;
        if(tuna === 0){
            salmon = 1
        } else salmon = 0;
        this.foodRequest = new Sushi(tuna, salmon);
    }

    makePizzaRequest(){
        this.foodRequest = new Pizza();
    }

    makePastryRequest(){
        this.foodRequest = new Pastry();
    }

    checkPlate(plate, player){
        if(plate.contents.some(i => i === this.foodRequest) && plate.contents.some(i => i === this.drinkRequest)){
            player.addMoney(10);
        }else if(plate.contents.some(i => i === this.foodRequest) || plate.contents.some(i => i === this.drinkRequest)){
            player.addMoney(5)
        }else{
            player.addMoney(0);
        }
    }

    startTimer(index, newGame){
        let time;
    if(this.difficulty === "easy"){
        time = 14000;
    }else if(this.difficulty ==="medium"){
        time = 11000
    } else time = 8000
    setTimeout(function(){this.removeFromQueue(index, newGame);}.bind(this), time)
    }

    removeFromQueue(index, newGame){
        newGame.queue.splice(newGame.queue.indexOf(this), 1);
        clearQueue();
        makeCustomerDom(newGame.queue);
        console.log(`${this.name} is fed up and is leaving T-T`, newGame.queue) 
    }

}

export class Plate{
    constructor(){
        this.contents = [];
    }

    addFood(content){
        if(this.contents.length <= 2){
            this.contents.push(content)
        }
    }
    addDrink(content){
        if(this.contents.length <= 2){
            this.contents.push(content)
        }
    }
}

export class Burger {
    constructor(lettuce, tomato, onion){
        this.lettuce = lettuce;
        this.tomato = tomato;
        this.onion = onion;
        this.name = "burger"
    }
}

export class Sushi {
    constructor(tuna, salmon){
        this.tuna = tuna
        this.salmon = salmon
        this.name = "sushi"
    }
}

export class Pizza {
    constructor(){
        this.toppings = "null";
        this.name ="pizza"
    }
}

export class Pastry {
    constructor(){
        this.cream = "null";
        this.name = "pastry"
    }
}

export const player = {
    money: 0,
    1: [],
    2: [],
    3: [],
    addMoney(amount){
        this.money += amount
    }
}

    


