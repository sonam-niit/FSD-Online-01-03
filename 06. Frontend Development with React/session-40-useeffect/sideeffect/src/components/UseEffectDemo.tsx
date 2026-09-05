import { useEffect, useState } from "react";

function UseEffDemo() {
    const [count, setCount] = useState<number>(0);
    const [input,setInput] = useState<string>("");
    useEffect(() => {
        console.log("Users Component Rendered");
    }, [])
    useEffect(() => {
        console.log("Count changed: ", count);
    }, [count])
    useEffect(() => {
        console.log("Input changed: ", input);
    }, [input])
    return (
        <>
            <h2>Users Component {count}</h2>
            <button onClick={() => setCount(count + 1)}>Button</button>
            <input type="text" placeholder="Enter Something" 
            onChange={(e)=>setInput(e.target.value)} />
        </>
    );
}

export default UseEffDemo;