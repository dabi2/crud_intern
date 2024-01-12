const inputBox = document.getElementById("inpt");
const taskList = document.getElementById("task_list");

function addTask(){
    if(inputBox.value ===''){
        alert("You must add Something")
    }
     else {
            var li = document.createElement("li");
            li.innerHTML = inputBox.value;
            taskList.appendChild(li);

            var span = document.createElement("span");
            span.innerHTML = "\u00d7";
            span.className = "remove"; //
            li.appendChild(span);
            span.addEventListener('click', function () {
                var confirmDelete = confirm("Are you sure you want to delete this Task?");
                if (confirmDelete){
                    taskList.removeChild(li);
                    saveTasks()
                }
                
            });
            saveTasks()
        }
    inputBox.value = "";
}
// taskList.addEventListener("click", function(e){
//     if(e.target.tagNAme === "LI"){
//         e.target.classList.toggle("check");
//     }
//     else if(e.target.tagNAme === "SPAN"){
//         e.target.parentElement.remove();
//     }

// }, false);

function done() {
    var taskList = document.getElementById('task_list');
    taskList.addEventListener('mousedown', function (event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
            event.preventDefault(); 
            loadTasks()
        }
    });
}
// function to save task
function saveTasks() {
    var taskList = document.getElementById('taskList').innerHTML;
    localStorage.setItem('tasks', taskList);
}

//function to load or save the data when the user is clossing or refreshing the browser task
function loadSavedTasks() {
    var savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        document.getElementById('taskList').innerHTML = savedTasks;
        addRemoveListeners();
    }
}

loadSavedTasks()
// save the data in the browser
// function saveData(){
//     localStorage.setItem("data", task_list.innerHTML);
// }
// function showTasklist(){
//     task_list.innerHTML = localStorage.getItem("data")
// }



