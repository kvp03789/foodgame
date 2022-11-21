import { Customer } from './game';
import {generateRandom, setDifficulty} from './utils';
import { clearQueue, makeCustomerDom, makeBurgerStationDom } from './dom';
import { randomName } from './utils';

export class Game{
    constructor(){
        this.queue = new Array()
    }

    addNewCustomer(newGame){
        if(this.queue.length < 3 ){
            let difficulty = setDifficulty();
            let name = randomName(newGame.queue);
            const newCustomer = new Customer(difficulty, "null", "null", name);
            this.queue.push(newCustomer);
            let i = this.queue.indexOf(newCustomer)
            console.log(`${newCustomer.name} walked in the door`, this.queue)
            clearQueue()
            makeCustomerDom(newGame.queue);
            // setTimeout(newCustomer.makeOrder, 1000)
            newCustomer.makeOrder();
            newCustomer.startTimer(i, newGame);
            }else console.log("queue full")
        }
    
        gameLoop(newGame){
            setInterval(() => {this.addNewCustomer(newGame);}, 6000);
            //this.addNewCustomer();
        }
}

    
