import { useEffect, useState } from "react";

function DemoUseEffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Demo Component Rendered");
    },[]) 
    //[] says run useeffect only once
    // otherwise everytime when state get changed useEffect executes background
    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Inc</button>
        </>
    );
}

export default DemoUseEffect;