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