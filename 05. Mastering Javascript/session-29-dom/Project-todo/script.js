const input = document.querySelector("#taskInput");
const todoList = document.querySelector("#todoList");

function addTask(){
    //validation
    if(input.value.trim()===""){
        alert("Enter Valid Task");
        return;
    }

    //create new li element
    const li = document.createElement("li");
    li.textContent = input.value;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✅";

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "❌";

    li.append(" ",completeBtn," ",deletebtn);
    todoList.appendChild(li);

    //mark complete
    completeBtn.addEventListener("click",()=>{
        li.classList.toggle("completed")
    })

    //delete logic
    deletebtn.addEventListener("click",()=>{
        li.remove()
    })
    input.value=""
}