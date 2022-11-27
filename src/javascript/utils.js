import BurgerAll from '../images/burger_all.png';
import BurgerPlain from '../images/burger_plain.png';
import BurgerBuns from '../images/burger_buns.png';
import BurgerMeatTomato from '../images/burger_meat_tomato.png';
import BurgerMeatOnion from '../images/burger_meat_onion.png';
import BurgerTomatoOnion from '../images/burger_meat_tomato_onion.png';
import BurgerMeatLettuce from '../images/burger_meat_lettuce.png';
import BurgerMeatLettuceOnion from '../images/burger_meat_lettuce_onion.png';
import BurgerMeatTomatoLettuce from '../images/burger_meat_tomato_lettuce.png';

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

export function displayCustomerSpecifics(obj){
    const values = Object.keys(obj).filter(key => obj[key]);
    return values
}

export function clearPlate(i){
    let plate = document.querySelector(`[data-plate="${i}"]`)
    while(plate.firstChild){
        plate.firstChild.remove();
    }
    console.log(plate)
}

export function hasSameData(obj1, obj2){
    // const obj1Length = Object.keys(obj1).length;
    // const obj2Length = Object.keys(obj2).length;
    // if(obj1Length === obj2Length) {
    //     return Object.keys(obj1).every(key => {
    //             obj2.hasOwnProperty(key) && obj1[key] === obj2[key]})
    // }else return false
    return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export function showBurgerIcon(obj, ele) {
    let burgerPic = new Image();
    burgerPic.classList.add("burger-icon")
    if(ele.classList.contains("drop-zone")){
        burgerPic.classList.add("drop-zone")
    }
    
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
            burgerPic.src = BurgerMeatOnion;
        }
    else if(
        obj.lettuce == 1 &&
        obj.tomato == 1 &&
        obj.onion == 0){
            burgerPic.src = BurgerMeatTomatoLettuce;
        }
    else if(
        obj.lettuce == 0 &&
        obj.tomato == 1 &&
        obj.onion == 1){
            burgerPic.src = BurgerTomatoOnion;
        }
    else if(
        obj.lettuce == 1 &&
        obj.tomato == 0 &&
        obj.onion == 1){
            burgerPic.src = BurgerMeatLettuceOnion;
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
        ele.append(burgerPic);
}
