import { useState, type KeyboardEvent } from "react";

function KeyBoardEvent() {
    const [text,setText]=useState("");

    const handleKeyDown=(e:KeyboardEvent<HTMLInputElement>)=>{
        console.log("Key Down ",e.key);
        if(e.key === "Enter")
            alert("Form Submitted")
    }
    const handleKeyUp=(e:KeyboardEvent<HTMLInputElement>)=>{
        console.log("Key UP ",e.key);
    }
    return ( 
        <>
            <h1>KeyBoard Event: {text}</h1>
            <input type="text" onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onChange={(e)=>setText(e.target.value)} />
        </>
     );
}

export default KeyBoardEvent;