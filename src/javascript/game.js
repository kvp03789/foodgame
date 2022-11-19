import {generateRandom} from './utils.js'

export const customerFactory = (difficulty) => {
   
    const makeFoodRequest = () => {
        let num = generateRandom(1, 4);
        let selection;
        if (num === 1){
            selection = "burger";
        }else if(num === 2){
            selection = "sushi";
        }else if(num === 3){
            selection = "pizza";
        }else if(num === 4){
            selection = "pastry";
        }

        return selection
    }
    const makeDrinkRequest = () => {
        let selection;
        let num = generateRandom(1, 4);
        if (num === 1){
            selection = "coffee";
        }else if(num === 2){
            selection = "tea"
        }else if(num === 3){
            selection = "milkshake"
        }else if(num === 4){
            selection = "soda"
        }

        return selection
    }
    return {difficulty, makeFoodRequest, makeDrinkRequest}
}

export class Plate{
    constructor(){
        this.contents = [];
    }

    addFood(content){
        this.contents.push(content)
    }
}

    


