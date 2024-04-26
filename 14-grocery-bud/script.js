const itemInput = document.getElementById('item-input');
const submitBtn = document.getElementById('submit-btn');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear-btn');

submitBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', clearItems);

function addItem() {
    const itemValue =  itemInput.value.trim();
    if (itemValue === '') {
        alert('Please enter an item.');
        return; 
    }

    if (itemValue !== '') {
        
        const listItem = document.createElement('li');
        listItem.textContent = itemValue;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', () => {
            itemList.removeChild(listItem);
        });
        listItem.appendChild(deleteBtn);
        itemList.appendChild(listItem);
        itemInput.value = '';
    }
}

function clearItems() {
    itemList.innerHTML = '';
}