// //Import lớp đối tượng
// import {ToDo} from "./todo.js";
// import {ToDoList} from "./todoList.js";

// let todoList = new ToDoList();
// let completeList = new ToDoList();
// //Hàm rút gọn cú pháp getElementById
// const getELE = id =>{
//     return document.getElementById(id);
// }

// //Hàm thêm todo
// const addToDo = () =>{
//     let txtToDo = getELE("newTask").value;
//     let ulToDo = getELE("todo");

//     if(txtToDo != ""){
//         let td = new ToDo(txtToDo,"todo");
//         todoList.addToDo(td);
//     }
//     //gọi hàm
//     showToDoList(ulToDo);

//     getELE("newTask").value = "";
// }

// getELE("addItem").addEventListener("click",()=>{
//     addToDo();
// });

// //Hàm hiển thị todo
// //Khai báo hàm
// const showToDoList = (ulToDo)=>{
//     ulToDo.innerHTML = todoList.renderToDo();
// }

// const showCompleteList = (ulCompleted)=>{
//     ulCompleted.innerHTML = completeList.renderToDo();
// }
// //Hàm delete todo
// const deleteToDo = (e)=>{
//     let tdIndex = e.currentTarget.getAttribute("data-index");
//     let status = e.currentTarget.getAttribute("data-status");
//     let ulToDo = getELE("todo");
//     let ulCompleted =  getELE("completed");
//     if(status == "todo"){
//         todoList.removeToDo(tdIndex);
//         showToDoList(ulToDo);
//     }else if(status == "completed"){
//         completeList.removeToDo(tdIndex);
//         showCompleteList(ulCompleted);
//     }else{
//         alert("Cannot delete todo!");
//     }

// }

// window.deleteToDo = deleteToDo;

// const completeToDo = (e)=>{
//     let tdIndex = e.currentTarget.getAttribute("data-index");
//     let status = e.currentTarget.getAttribute("data-status");
//     let ulToDo = getELE("todo");
//     let ulCompleted =  getELE("completed");

//     if(status == "todo"){
//         // slice: start <=index <end
//         let completedItem = todoList.tdList.slice(tdIndex,tdIndex+1);
//         let objToDo = new ToDo(completedItem[0].textTodo,"completed");
//         moveToDo(todoList,completeList,objToDo,tdIndex);
//         showToDoList(ulToDo);
//         showCompleteList(ulCompleted);
//     }else if(status == "completed"){
//         let undoItem = completeList.tdList.slice(tdIndex,tdIndex+1);
//         let objToDo = new ToDo(undoItem[0].textTodo,"todo");
//         moveToDo(completeList,todoList,objToDo,tdIndex);
//         showToDoList(ulToDo);
//         showCompleteList(ulCompleted);
//     }else{
//         alert("Cannot move todo !");
//     }
// }

// window.completeToDo = completeToDo;

// const moveToDo = (depart,arrival,obj,tdIndex)=>{
//     //Remove todo from depart
//     depart.removeToDo(tdIndex);

//     //Add todo to arrival
//     arrival.addToDo(obj);

// }

// const sortASC = ()=>{
//     let ulToDo = getELE("todo");
//     todoList.sortToDoList(false);
//     showToDoList(ulToDo);
// }

// window.sortASC = sortASC;

// const sortDES = ()=>{
//     let ulToDo = getELE("todo");
//     todoList.sortToDoList(true);
//     showToDoList(ulToDo);
// }

// window.sortDES = sortDES;




//import
import { ToDo } from "./todo.js";
import { ToDoList } from "./todoList.js";

const getELE = (id) => {
    return document.getElementById(id);
};

//create instance of object ToDoList
let todoList = new ToDoList();
let completeList = new ToDoList();
//Function to addToDo
const addToDo = () => {
    let txtToDo = getELE("newTask").value;
    let ulToDo = getELE("todo");

    if(txtToDo != ""){
        let td = new ToDo(txtToDo, "todo");
        todoList.addToDo(td);
    }   
    showToDoList(ulToDo);
    getELE("newTask").value = "";
};

getELE("addItem").addEventListener("click", () => {
    addToDo();
});

//function to display todo on UI
const showToDoList =(ulToDo)=>{
    ulToDo.innerHTML = todoList.renderToDo();
}
//function to display complete todo on UI
const showCompleteList =(ulCompleted)=>{
    ulCompleted.innerHTML = completeList.renderToDo();
}
//function to delete todo 
const deleteToDo = (e)=>{
    let tdIndex = e.currentTarget.getAttribute("data-index");
    let status = e.currentTarget.getAttribute("data-status");
    let ulToDo = getELE("todo");
    let ulCompleted = getELE("completed");

    if(status == "todo"){
        todoList.removeToDo(tdIndex);
        showToDoList(ulToDo);
    }else if(status == "completed"){
        completeList.removeToDo(tdIndex);
        showCompleteList(ulCompleted);
    }else{
        alert("Cannot delete todo!");
    }
   
        
    
}

window.deleteToDo = deleteToDo;

const completeToDo = (e)=>{
    let tdIndex = e.currentTarget.getAttribute("data-index");
    let status = e.currentTarget.getAttribute("data-status");
    let ulToDo = getELE("todo");
    let ulCompleted = getELE("completed");

    if(status == "todo"){
        let completedItem = todoList.tdList.slice(tdIndex,tdIndex+1);
        let objToDo = new ToDo(completedItem[0].textTodo, "completed");
       

        moveToDo(todoList, completeList, objToDo, tdIndex);
        showToDoList(ulToDo);
        showCompleteList(ulCompleted);

    }else if(status == "completed"){
        let undoItem = completeList.tdList.slice(tdIndex,tdIndex+1);
        let objToDo = new ToDo(undoItem[0].textTodo, "todo");
    
        moveToDo(completeList, todoList, objToDo, tdIndex);
        showToDoList(ulToDo);
        showCompleteList(ulCompleted);
    }else{
        alert("Cannot move todo");
    }
}

window.completeToDo = completeToDo;

const moveToDo = (depart, arrival, obj, tdIndex)=>{
    //Remove todo from depart 
    depart.removeToDo(tdIndex);
    //Add todo to arrival
    arrival.addToDo(obj);
}

const sortASC = ()=>{
    let ulToDo = getELE("todo");
    todoList.sortToDoList(false);
    showToDoList(ulToDo);
}

const sortDES = ()=>{
    let ulToDo = getELE("todo");
    todoList.sortToDoList(true);
    showToDoList(ulToDo);
}
window.sortASC = sortASC;
window.sortDES = sortDES;