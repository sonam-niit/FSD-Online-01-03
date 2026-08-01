import { useReducer } from "react";
import { reducer } from "../Reducers/counterReducer";

function Counter() {
    const [state,dispatch] = useReducer(reducer,{count: 0})
    return ( 
        <>
            <h3>Counter Component: {state.count}</h3>
            <button onClick={()=>dispatch({type:"increment"})}>+</button>
            <button onClick={()=>dispatch({type:"decrement"})}>-</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </>
     );
}

export default Counter;