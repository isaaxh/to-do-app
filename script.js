const btnSubmit = document.querySelector('.btn-submit');
const btnClearList = document.querySelector('.btn-clear-list');

btnSubmit.addEventListener('click', () => {
    const textInputValue = document.querySelector('.text-input').value; 
    const todoList = document.querySelector('.todo-list');
    let todoItem = document.createElement("li");
    let btnDeleteItem = document.createElement("span");
    let btnDone = document.createElement("a");
    btnDeleteItem.innerText = "X";
    todoItem.innerText = textInputValue;
    todoItem.classList.add("todo-item");
    btnDeleteItem.classList.add("btn-delete-item");
    btnDeleteItem.setAttribute("onclick", "deleteItem(event)");
    todoItem.appendChild(btnDeleteItem);
    todoList.appendChild(todoItem);
    document.querySelector('.text-input').value = '';
})

btnClearList.addEventListener('click', () => {
    Array.from(todoItem.childNodes).forEach((element)=> {
        todoItem.removeChild(element);
    })
}); 

function deleteItem(e){
    const parentElement = e.target.parentNode;
    parentElement.remove();
}

