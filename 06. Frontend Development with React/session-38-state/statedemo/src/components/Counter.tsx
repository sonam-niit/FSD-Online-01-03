import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncTwice = () => {
        setCount(prev => prev + 1); //take old value and inc
        setCount(prev => prev + 1);//take old value and inc
    }
    return (
        <>
            <h2>Counter Component: {count}</h2>
            <button onClick={() => { setCount(prev=>prev+1) }}>+</button>
            <button onClick={() => { setCount(prev=>prev-1) }}>-</button>
            <button onClick={handleIncTwice}>Twice +</button>
        </>
    );
}

export default Counter
