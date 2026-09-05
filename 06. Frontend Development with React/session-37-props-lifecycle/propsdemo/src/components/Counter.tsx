import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0);

    return(
        <>
            <h3>Counter Demo: {count}</h3>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <button onClick={()=>{setCount(count-1)}}>-</button>
        </>
    )
}

export default Counter;