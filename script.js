const btnSubmit = document.querySelector('.btn-submit');
const btnClearList = document.querySelector('.btn-clear-list');

btnSubmit.addEventListener('click', () => {
    const textInputValue = document.querySelector('.text-input').value; 
    const todoList = document.querySelector('.todo-list');
    let todoItem = document.createElement("li");
    let todoItemText = document.createElement("p");
    let btnDeleteItem = document.createElement("span");
    let btnDone = document.createElement("a");
    todoItemText.innerText = textInputValue;
    btnDone.innerText = "done";
    btnDeleteItem.innerText = "X";
    btnDone.classList.add("material-icons","btn-done");
    btnDeleteItem.classList.add("btn-delete-item");
    todoItem.classList.add("todo-item");
    btnDone.setAttribute("onclick", "doneItem(event)");
    btnDeleteItem.setAttribute("onclick", "deleteItem(event)");
    todoItem.appendChild(todoItemText);
    todoItem.appendChild(btnDone);
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

function doneItem(e){
    const textELement = e.target.previousElementSibling;
    textELement.style.textDecoration = "line-through";
}

