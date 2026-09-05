import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../slices/store";
import { decrement, decrementtByAmount, increment, incrementByAmount } from "../slices/counterSlice";

function Counter() {
    const count = useSelector( (state:RootState)=>state.counter.value)
    // reading state from global store
    const dispatch = useDispatch();
    return ( 
        <>
            <h2>Count: {count}</h2>

            <button onClick={()=>{dispatch(increment())}}>+</button>
            <button onClick={()=>{dispatch(decrement())}}>-</button>            
            <button onClick={()=>{dispatch(incrementByAmount(2))}}>+ by 2</button>            
            <button onClick={()=>{dispatch(decrementtByAmount(2))}}>- by 2</button>      
                  {/* here 2 passed as payload */}

        </>
     );
}

export default Counter;