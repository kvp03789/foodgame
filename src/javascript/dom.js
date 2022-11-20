export function clearDom(){
    const container = document.querySelector(".container");
    while(container.firstChild){
        container.firstChild.remove();
    }
}