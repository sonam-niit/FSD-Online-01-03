import { useState } from "react";
import useCounter from "../customhooks/useCounter";
import Modal from "./portal";
import ErrorBoundary from "./Errorboundary";
import Payment from "./Payment";

function Home() {
    const {count,increment,decrement}=useCounter(); //custom hooks

    const [showModal,setShowModal]=useState(false);
    return ( 
        <>
            <h2>Home Component:{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

            <button onClick={()=>{setShowModal(true)}}>Login</button>
            {showModal && <Modal onClose={()=>setShowModal(false)} />}

            <ErrorBoundary>
                <Payment />
            </ErrorBoundary>
        </>
     );
}

export default Home;