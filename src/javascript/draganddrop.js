import {Burger, Pizza, Sushi, player, Pastry} from './game'

let dataObject = {
    foodObj: "null",
    drinkObj: "null",
    id: "null"
}

export function dragAndDrop(){
    document.addEventListener("DOMContentLoaded", () => {

        document.body.addEventListener('dragstart', handleDragStart);
        document.body.addEventListener('drop', handleDrop);
        document.body.addEventListener('dragover', handleOver);

    })
    
    function handleDragStart(e){
        let obj = e.target;
        if(!obj.closest('.draggable')) return;
        if(obj.classList.contains("draggable")){
            obj = obj.firstElementChild
        }
        console.log("DRAG START", obj)
        if(obj.parentElement.classList.contains("buns")){
            const burger = new Burger(0, 0, 0, 0);
            dataObject.foodObj = burger
            console.log(burger, dataObject)
        }else if(obj.parentElement.classList.contains("pizza")){
            const pizza = new Pizza();
            dataObject.foodObj = pizza;
        }else if(obj.parentElement.classList.contains("sushi")){
            const sushi = new Sushi();
            dataObject.foodObj = sushi;
        }else if(obj.parentElement.classList.contains("pastry")){
            const pastry = new Pastry();
            dataObject.foodObj = pastry;
        }
        else if(obj.parentElement.classList.contains("addon")){
            let topping = e.target.dataset.ingredient;
            dataObject.foodObj[topping] = 1;
        }
        
}
    
    
    function handleDrop(e){
        console.log("DROP")
        let dropZone = e.target;
        if(!dropZone.classList.contains("drop-zone")) return;

        e.preventDefault();
        let num = e.target.dataset.plate
        player[num].push(dataObject.foodObj)
        console.log(dataObject.foodObj)

    }
    
    
    function handleOver(e){
    e.preventDefault();
    }
}