const inputBox = document.getElementById("inpt");
const taskList = document.getElementById("task_list");

function addTask(){
    if(inputBox.value ===''){
        alert("You must add Something")
    }
    else{
        let li = document.createElement("li"); //it is creating an HTML element 
        //for example when we add a text the jscript function is creating a --li element
        li.innerHTML = inputBox.value; // whatever text wwe have in the input box
        //it will display in th --li element
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
}
