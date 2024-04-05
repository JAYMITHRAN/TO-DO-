let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input');
let array = [];

button.addEventListener('click',()=>
{
    array.push(input.value)
    addtodo(input.value)
    input.value=''
})

function addtodo(todo)
{
    let para = document.createElement('p');
    para.innerText = todo;
    todoList.appendChild(para)
    
    para.addEventListener('click',()=>
    {
        para.style.textDecoration = 'line-through'
    
    })
    para.addEventListener('dblclick',()=>
    {
        todoList.removeChild(para)
        
    })
}

