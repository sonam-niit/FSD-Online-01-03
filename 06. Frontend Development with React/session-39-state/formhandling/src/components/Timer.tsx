import { useEffect, useState } from "react";

function Timer() {
    const [count, setCount] = useState(30);
    useEffect(() => {
        if(count==0){
            alert("Times Up!");
            return;
        }
        const timer = setInterval(() => {
            setCount(count - 1);
        }, 1000)
        
        return () => {
            clearInterval(timer)
        }
    },[count])
    return (
        <>
            <h3>{count} to go!</h3>
        </>
    );
}

export default Timer;