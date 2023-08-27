// const addButton = document.getElementById("addButton");
// const inputText = document.getElementById("inputText");
// const itemList = document.getElementById("itemList");
// const itemWarning = document.getElementById("itemWarning");
// const deleteText = document.getElementById("deleteText");


// addButton.addEventListener('click', () => {
    
//     if(inputText.value == "") {
//         itemWarning.textContent = "Input an item"
//     }else {
//         const listDiv = document.createElement("div")
//         listDiv.innerHTML = `
//             <div class="eachList">${inputText.value}
//                 <h3 class="deleteItem">DEL</h3>
//             </div>
//         `
//         itemList.appendChild(listDiv)
//         inputText.value = "";
        
//         // const deleteAText = document.querySelector(".deleteAText")
//         // deleteAText.addEventListener((click), ()=> {
//         //     
//         // })

//         const eachList = document.querySelectorAll(".eachList")
//         const deleteItem = document.querySelectorAll(".deleteItem")

//         deleteItem.forEach((items, i) => {
//             items.addEventListener('click',()=> {
//                 eachList[i].remove()
//             })
//         })
        
//     }
// })

////SECOND METHOD USING A FUNCTION

// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

//Add a function for new tasks

function addTask() {
    const taskText =taskInput.value;

    if (taskText.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `<span>${taskText}</span><button class="deleteButton">Delete</button>`;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

addButton.addEventListener('click', addTask)

taskList.addEventListener('click', function(event) {
    if(event.target.classList.contains("deleteButton")) {
        event.target.parentElement.remove()
    }
})