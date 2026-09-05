import { useCallback, useRef, useState } from "react";

function Counter() {
    const [count,setCount]=useState(0);
    // const handleClick=()=>{
    //     console.log("Button Clicked");
    // }

    const handleClick = useCallback(()=>{
        console.log("Button Clicked");
    },[])
    
    const previousFunction = useRef(handleClick) // get old fun
    console.log(previousFunction.current === handleClick); // compare with new
    // use call back is used to stable function reference
    // everytime count change, compo renders
    // every render this function recreated
    
    return ( 
        <>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </>
     );
}

export default Counter;