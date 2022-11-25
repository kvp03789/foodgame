import {displayCustomerSpecifics, showBurgerIcon} from './utils'
import CustomerIcon from '../images/customericon.png'


export function clearDom(){
    const container = document.querySelector(".container");
    while(container.firstChild){
        container.firstChild.remove();
    }
}

export function clearQueue(){
    const container = document.querySelector(".container");
    const queue = document.querySelector(".customer-queue");
    while(queue.firstChild){
        queue.firstChild.remove();
    }
}

export function makeBurgerStationDom(){
    const container = document.querySelector(".container");
    const burgerContainer = document.querySelector(".burger-container")
    burgerContainer.classList.add("burger-station")
    const buns = document.createElement("div")
    const lettuce = document.createElement("div")
    const tomato = document.createElement("div")
    const ketchup = document.createElement("div")
    const onion = document.createElement("div")
    buns.classList.add("buns", "burger-topping")
    lettuce.classList.add("lettuce", "burger-topping");
    tomato.classList.add("tomato", "burger-topping");
    ketchup.classList.add("ketchup", "burger-topping");
    onion.classList.add("onion", "burger-topping")
    burgerContainer.append(buns, lettuce, tomato, ketchup, onion, buns);
    container.append(burgerContainer)
}

export function makeCustomerDom(queue){
    const container = document.querySelector(".container");
    const domQueue = document.querySelector(".customer-queue");
    
    for(let i = 0; i < queue.length; i++){
        const customerContainer = document.createElement("div");
        const customer = document.createElement("div");
        const customerName = document.createElement("h3");
        const customerIcon = new Image();

        customerContainer.classList.add("customer-container")
        customerIcon.classList.add("customer-icon")
        customerIcon.src = CustomerIcon;
        customer.classList.add("customer")
        customer.append(customerIcon);
        customer.setAttribute('id', `${i}`)
        customerName.innerText = `${queue[i].name}`

        customerContainer.append(customer, customerName)
        displayCustomerOrder(queue[i], customerContainer)
        showBurgerIcon(queue[i].foodRequest, customerContainer)
        domQueue.append(customerContainer);
    } 
}

function displayCustomerOrder(customer, parentEle){
    const customerOrder = document.createElement("div");
    const customerText = document.createElement("p")
    const customerSpecifics = document.createElement("p")
    const customerText2 = document.createElement("p")
    if(typeof customer.order[0] === "object"){
        customerText.innerText = customer.order[0].name;
        let specifics = displayCustomerSpecifics(customer.order[0], customerSpecifics)
        customerSpecifics.innerText = `${specifics}`
    }else {customerText.innerText = customer.order[0]
            customerSpecifics.innerText = ""}
    customerText2.innerText = customer.order[1];
    customerOrder.classList.add("customer-order")
    customerOrder.append(customerText, customerSpecifics, customerText2)
    parentEle.append(customerOrder)
}

export function deleteCustomerDom(i){
    document.getElementById(`${i}`).remove();
}