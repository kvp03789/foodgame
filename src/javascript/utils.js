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