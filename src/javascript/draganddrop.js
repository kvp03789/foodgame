import {Burger, Pizza, Sushi, player, Pastry} from './game'
import {clearPlate, showBurgerIcon} from './utils';
import {Game} from './flow.js';

let dataObject = {
    foodObj: "null",
    drinkObj: "null",
    id: "null",
    plateNumber: "null",
    getFood(){
        return this.foodObj
    }
}

export function dragAndDrop(newGame){
    document.addEventListener("DOMContentLoaded", () => {

        document.body.addEventListener('dragstart', handleDragStart);
        document.body.addEventListener('drop', handleDrop.bind(newGame));
        document.body.addEventListener('dragover', handleOver);
        document.querySelectorAll(".clear-button").forEach(i => {
            i.addEventListener("click", handleClearButton)
        })

    })
    
    function handleDragStart(e){
        let obj = e.target;
        if(!obj.closest('.draggable')) return;
        if(obj.classList.contains("draggable")){
            obj = obj.firstElementChild
        }
        if(obj.parentElement.classList.contains("buns")){
            const burger = new Burger(0, 0, 0, 0);
            dataObject.foodObj = burger
            //console.log(burger, dataObject)
        }else if(obj.parentElement.classList.contains("pizza")){
            const pizza = new Pizza();
            dataObject.foodObj = pizza;
        }else if(obj.parentElement.classList.contains("sushi")){
            const sushi = new Sushi(0, 0);
            dataObject.foodObj = sushi;
        }else if(obj.parentElement.classList.contains("pastry")){
            const pastry = new Pastry();
            dataObject.foodObj = pastry;
        }
        else if(obj.parentElement.classList.contains("addon")){
            let topping = e.target.dataset.ingredient;
            dataObject.foodObj[topping] = 1;
        }
        else if(obj.parentElement.closest(".plate")){
            let plateNum = e.target.closest(".plate").dataset.plate;
            dataObject.plateNumber = plateNum
            //console.log(plateNum)
        }
        // console.log(dataObject.foodObj)
}
    
    
    function handleDrop(e, newGame){
        let dropZone = e.target;
        if(!dropZone.closest(".drop-zone")) return;
        if(dropZone.classList.contains("burger-icon")){
            dropZone = dropZone.parentElement
        }
        if(dropZone.classList.contains("customer-container")){
            dropZone = dropZone.firstElementChild;
        }

        if(dropZone.closest(".customer-container")){
            e.preventDefault();
            // this.publish('plateAdded', player[dataObject.plateNumber] )
            // player.checkPlate(player[dataObject.plateNumber], this.queue[dropZone.id])
            player.checkPlate(dataObject.plateNumber, this.queue[dropZone.id], this)
        }else {
            e.preventDefault();
            let num = dropZone.dataset.plate
            //console.log(`num = ${num}`)
            if(player[num].length === 0 || undefined){
                player[num].push(dataObject.foodObj)
                //console.log(dataObject.foodObj, "asdf")
            }else{
                player[num][0] = dataObject.foodObj
                //player[num].splice(0, 0, dataObject.getFood())
                //console.log(dataObject.foodObj, "uwuwuw")
            }
            clearPlate(num);
            showBurgerIcon(player[num][0], dropZone)
            console.log(player[num][0])
            
        }

        
    }
    
    
    function handleOver(e){
    e.preventDefault();
    }
}

function handleClearButton(e){
    let num = e.target.id;

    clearPlate(num);
}