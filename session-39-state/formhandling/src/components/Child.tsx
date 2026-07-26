import { useEffect } from "react";

function Child() {

    useEffect(()=>{
        console.log("Component Mounted");
        
        //Cleanup Function
        return ()=>{
            console.log("Component Unmounted");
        }
    },[])
    return ( 
        <div style={{padding:"20px",border:"2px solid blue"}}>
            <h3>Child Component</h3>
        </div>
     );
}

export default Child;