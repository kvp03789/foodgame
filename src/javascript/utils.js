import BurgerAll from '../images/burger_all.png';
import BurgerPlain from '../images/burger_plain.png';
import BurgerBuns from '../images/burger_buns.png';
import BurgerMeatTomato from '../images/burger_meat_tomato.png';
import BurgerMeatLettuce from '../images/burger_meat_lettuce.png;'
import BurgerMeatTomatoLettuce from '../images/burger_meat_tomato_lettuce.png'

export function setDifficulty(){
    let num = (Math.random() * 9);
    let difficulty;
    if(num < 4.5){
        difficulty = "easy";
    } else if(num >= 4.5 && num < 8){
        difficulty = "medium"
    }else if(num >= 8){
        difficulty = "hard";
    }
    return difficulty
}

export function generateRandom(min, max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

export function makeEle(ele, addClass){
    const item = document.createElement(ele);
    item.classList.add(addClass);
}

export const nameArray = ["gary", "stu", "jana", "ashlee", "vikram", "ali", "jerry",
 "ty", "kyle", "dana", "stephen", "jessica", "arnie", "amy", "roger", "milo", "manny",
"bill", "fred", "sarah", "claire", "anne-marie", "jade", "ryan", "eli", "joe", "tabi",
"scott", "rita", "angelica", "maggie"]

export const randomName = function(queue){
    let i = generateRandom(0, 30)
    const name = nameArray[i];
    if(queue.includes(`${name}`) === false){
        return name
    }
    randomName(queue)
}

export function displayCustomerSpecifics(obj, ele){
    // let para;
    // for(let i in obj){
    //     if(i === 1){
    //         para += ` ${i}`
    //     }
    // }
    // return para
    //console.log(obj.filter)
    //const keys = Object.keys(obj);
    //const filtered = keys.filter(k => obj[k] === true)
    const values = Object.keys(obj).filter(key => obj[key]);
    return values
    //return keys.toString();
}

export function showBurgerIcon(obj) {
    let burgerPic;
    if(
        obj.lettuce == 1 &&
        obj.tomato == 0 &&
        obj.onion == 0){
            burgerPic.src = BurgerMeatLettuce;
        }
    else if(
        obj.lettuce == 0 &&
        obj.tomato == 1 &&
        obj.onion == 0){
            burgerPic.src = BurgerMeatTomato;
        }
    else if(
        obj.lettuce == 0 &&
        obj.tomato == 0 &&
        obj.onion == 1){
            burgerPic.src = BurgerMeatLettuce;
        }
    else if(
        obj.lettuce == 1 &&
        obj.tomato == 1 &&
        obj.onion == 0){
            burgerPic.src = BurgerMeatLettuceTomato;
        }
    else if(
        obj.lettuce == 0 &&
        obj.tomato == 1 &&
        obj.onion == 1){
            burgerPic.src = BurgerMeatLettuce;
        }
    else if(
        obj.lettuce == 1 &&
        obj.tomato == 0 &&
        obj.onion == 1){
            burgerPic.src = BurgerMeatLettuce;
        }
    else if(
        obj.lettuce == 1 &&
        obj.tomato == 1 &&
        obj.onion == 1){
            burgerPic.src = BurgerAll;
        }
    else if(
        obj.lettuce == 0 &&
        obj.tomato == 0 &&
        obj.onion == 0){
            burgerPic.src = BurgerPlain;
        }
}