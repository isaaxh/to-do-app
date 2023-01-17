const btnSubmit = document.querySelector('.btn-submit');
const btnClearList = document.querySelector('.btn-clear-list');
const deleteItem = document.querySelector('.delete-item');

btnSubmit.addEventListener('click', () => {
    const textInputValue = document.querySelector('.text-input').value; 
    const todoList = document.querySelector('.todo-list');
    let todoItem = document.createElement("li");
    todoItem.innerText = textInputValue;
    todoItem.classList.add("todo-item");
    todoList.appendChild(todoItem);
    document.querySelector('.text-input').value = '';
})

btnClearList.addEventListener('click', () => {
    Array.from(todoItem.childNodes).forEach((element)=> {
        todoItem.removeChild(element);
    })
}); 

todoList.addEventListener('click', (e) => {
    
    console.log(e.target);
    if (e.target.tagName === "li"){
        todoList.removeChild(e.target);
    }
});
