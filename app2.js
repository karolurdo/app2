

const addedItems = [];
const options = [];
const h1 = document.querySelector('h1');

const addItems = (e) => {
    e.preventDefault(); //stop refreshing 

    const input = document.querySelector('input');
    const addItem = input.value;
    if (input.value.length) {
        for (add of addedItems){
            if (add.toUpperCase() === addItem.toUpperCase()) {
                alert("wrong") //popup
            return; // end when name arledy in []
        }
    }
}
addedItems.push(addItem);
// console.log(addedItems);
}

const clean = () => {
    addedItems.length = 0; // clear addedItems
}

const showAll = () => {
    h1.textContent = addedItems;

}

const showAdvice = () => {
    const indexRoll = (Math.floor(Math.random() * addedItems.length));
    document.querySelector("h1").textContent = addedItems[indexRoll];
}


document.querySelector('.add').addEventListener('click', addItems);
document.querySelector('.clean').addEventListener('click', clean);
document.querySelector('.showAllAdvice').addEventListener('click', showAll);
document.querySelector('.showAdvice').addEventListener('click', showAdvice);