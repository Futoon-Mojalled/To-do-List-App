const inputBox = document.getElementById("input-box");
const toDoList = document.getElementById("todo-list");
const completeall = document.getElementById("complete-all");
const deleteall = document.getElementById("delete-all");

//Add task
function addTask() {
    if (inputBox.value === '') {
        alert("You didn't write your task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${inputBox.value}</span>
            <input type="text" value="${inputBox.value}">
            <span class="edit-btn"><img src="edit.svg" alt="Edit" width="20" height="20"></span>
            <span class="delete-btn">&times;</span>
        `;
        toDoList.appendChild(li);
    }
    inputBox.value = "";
}

toDoList.addEventListener("click", function(e) {
    //complete a task
    if (e.target.tagName === "LI" || (e.target.tagName === "SPAN" && !e.target.classList.contains("edit-btn") && !e.target.classList.contains("delete-btn"))) {
        let li = e.target.closest("li");
        li.classList.toggle("checked");
    //delet a task
    } else if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    //edit a task
    } else if (e.target.classList.contains("edit-btn") || e.target.parentElement.classList.contains("edit-btn")) {
        let li = e.target.closest("li");
        let span = li.querySelector("span:first-child");
        let input = li.querySelector("input[type='text']");
        if (input.style.display === "none") {
            input.style.display = "block";
            span.style.display = "none";
            input.focus();
        } else {
            input.style.display = "none";
            span.style.display = "block";
            span.textContent = input.value;
        }
    }
}, false);

//complete all tasks
completeall.addEventListener("click", function(e){
    const li = document.querySelectorAll("li")
    const liArray = Array.from(li)
    for (let index = 0; index < liArray.length; index++) {
        liArray[index].classList.toggle("checked");
    }
});

//Delete all tasks
deleteall.addEventListener("click", function(e){
    const li = document.querySelectorAll("li")
    const liArray = Array.from(li)
    for (let index = 0; index < liArray.length; index++) {
        liArray[index].remove();
    }
});