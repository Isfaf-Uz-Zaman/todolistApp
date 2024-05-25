let addedTask = document.querySelector('#new-task')
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

//Function That creates new task

let createNewTask = function (task) {

    // Create a list
    let listItm = document.createElement('li')
    //get an input under the list
    let inputItem = document.createElement('input')

    //Make the input to checkbox type
    inputItem.type = 'checkbox';

    //Create label for the checkbox

    let nameTheTask = document.createElement('label')

    //Make the user provided input as label 
    nameTheTask.innerText = task;

    //append the input under the list
    listItm.appendChild(inputItem);

    //append the label under the list
    listItm.appendChild(nameTheTask);

    //return the list
    return listItm;

}

//Function That activates when user press submit
let addTask = function (event) {

    //To prevent auto remove of user input from the form after submit
    event.preventDefault();

    //get user submitted value to HTML elements from the function to a variable
    let listItem = createNewTask(addedTask.value);

    //append the html element
    todoUl.appendChild(listItem);

    //update the value of input to none 
    addedTask.value = "";
    // This part activates when checkbox clicked
    bindInCompleteItems(listItem, completeTask);

    
}


let bindInCompleteItems = function (taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

form.addEventListener('submit', addTask);

let completeTask = function () {

    //As we are in the input part we have to select the parent which is the list
    let listItem = this.parentNode;

    //Transform the element to the shape of completed task like adding the red button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    //remove the checkbox
    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}


let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}









let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}
