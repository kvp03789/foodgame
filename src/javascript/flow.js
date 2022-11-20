import { Customer } from './game';
import {generateRandom, setDifficulty} from './utils';

export class Game{
    constructor(){
        this.queue = new Array()
    }

    addNewCustomer(newGame){
        if(this.queue.length < 3 ){
            let difficulty = setDifficulty();
            const newCustomer = new Customer(difficulty, "null", "null");
            this.queue.push(newCustomer);
            let i = this.queue.indexOf(newCustomer)
            console.log("customer added", this.queue)
            // setTimeout(newCustomer.makeOrder, 1000)
            newCustomer.makeOrder();
            newCustomer.startTimer(i, newGame);
            }else console.log("get fucked")
        }
    
        gameLoop(newGame){
            setInterval(() => {this.addNewCustomer(newGame);}, 6000);
            //this.addNewCustomer();
        }
}

    
