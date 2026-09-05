import { useState } from "react";
import Child from "./Child";

function Parent() {
    const [show,setShow]=useState<boolean>(true);
    return ( 
        <div style={{padding:"20px",border:"2px solid red"}}>
            <h2>Parent Component</h2>
            <button onClick={()=>setShow(!show)}>Toggle</button>

            {show && <Child />}
            {/* conditional rendering id show is true child will be visible */}
        </div>
     );
}

export default Parent;