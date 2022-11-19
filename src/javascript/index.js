import '../css/style.css';
import { setDifficulty } from './utils';
import { customerFactory } from './game';

    let difficulty = setDifficulty();
    const newCustomer = customerFactory(difficulty, "none", "none");
    
    console.log(newCustomer.makeFoodRequest(), newCustomer.makeDrinkRequest())
    console.log(newCustomer)