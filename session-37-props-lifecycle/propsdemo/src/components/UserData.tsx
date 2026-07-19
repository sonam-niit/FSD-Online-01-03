import { useState } from "react";

function UserData() {

    const [name, setName] = useState("Guest");

    const handleClick = () => {
        setName("Sonam Soni")
    }
    
    return (
        <>
            <h2>Hello {name}</h2>
            <button onClick={handleClick}>change Name</button>
        </>
    )
}
export default UserData;