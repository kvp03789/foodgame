import { Customer } from './game';
import {generateRandom, setDifficulty} from './utils';
import { clearQueue, makeCustomerDom, makeBurgerStationDom } from './dom';
import { randomName } from './utils';

export class Game{
    constructor(){
        this.queue = new Array()
        this.subscribers = {}
    }

    addNewCustomer(newGame){
        if(this.queue.length < 3 ){
            let difficulty = setDifficulty();
            let name = randomName(newGame.queue);
            const newCustomer = new Customer(difficulty, "null", "null", name);
            this.queue.push(newCustomer);
            let i = this.queue.indexOf(newCustomer)
            console.log(`${newCustomer.name} walked in the door`, this.queue)
            // setTimeout(newCustomer.makeOrder, 1000)
            newCustomer.makeOrder();
            newCustomer.startTimer(i, newGame);
            // newGame.subscribe('plateAdded', newCustomer.checkPlate.bind(newCustomer))
            clearQueue()
            makeCustomerDom(newGame);
            
            }else console.log("queue full")
        }
    
        gameLoop(newGame){
            setInterval(() => {this.addNewCustomer(newGame, this.pubSub);}, 6000);
            //this.addNewCustomer();
        }

        publish(eventName, data){
            if(!Array.isArray(this.subscribers[eventName])){
                return
            }
            this.subscribers[eventName].forEach((callback) => {
                callback(data);
            })
        }

        subscribe(eventName, callback){
            if(!Array.isArray(this.subscribers[eventName])){
                this.subscribers[eventName] = [];
            }
            this.subscribers[eventName].push(callback)
        }
}

