import { useState } from "react";

function TodoApp(){
    const [task,setTask]= useState<string>("");
    const [list,setList]= useState<string[]>([]);

    const handleClick=()=>{
        if(task.trim()===""){
            alert("Task cannot be empty");
            return;
        }
        setList([...list,task.trim()]); 
        setTask("")
    }
    return(
        <>
            <ul>
                {
                    list.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>

            <input 
                type="text" 
                placeholder="Enter Your Task" 
                onChange={(e)=>setTask(e.target.value)}
                value={task}
            />
            <button onClick={handleClick}>Save Todo</button>
        </>
    )
}

export default TodoApp;