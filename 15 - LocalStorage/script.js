const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e){
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text: 'Item Name',
        done: false
    }
}

addItems.addEventListener('submit', addItem);

// console.log(addItems)