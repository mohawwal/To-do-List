const addBtn = document.querySelector(".push");
const taskInputBox = document.querySelector(".addTaskInputBox")
const taskSpace = document.querySelector(".tasks-container")
const WarningMsg = document.querySelector(".warningText")



addBtn.addEventListener("click", () => {
    if (taskInputBox.value.length == 0) {
        return WarningMsg.innerHTML= "Enter a task"
    } else {
        taskSpace.innerHTML +=`<div class="tasks">
                                    <span class="taskInput">
                                        ${taskInputBox.value}
                                    </span>
                                    <button class="delete">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            `;
        taskInputBox.value = "";
        const delBtn = document.querySelectorAll(".delete")
        for (let i =0; i<delBtn.length; i++) {
            delBtn[i].addEventListener("click", function() {
                this.parentNode.remove();
            })
        }
    }
})