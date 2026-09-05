import { useMemo, useState } from "react";

function DemoCount() {
    const [count,setCount] = useState(0);
    const [name,setName]= useState("")
    
    const cube =  useMemo(()=>{
        console.log("calculating");
        return count*count*count;
    },[count])
    return ( 
        <>
            <h2>Cube: {cube}, {count}</h2>
            <button onClick={()=>setCount(count+1)}>+</button>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </>
     );
}

export default DemoCount;
//use memo is used to remeber valu