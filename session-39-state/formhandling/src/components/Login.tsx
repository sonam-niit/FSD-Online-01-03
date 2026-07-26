import { useState, type ChangeEvent, type SubmitEvent } from "react";

function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit=(e:SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(username=="admin" && password=="admin123")
            alert("Login Successful!")
        else    
            alert("Invalid Credentials")
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e: ChangeEvent<HTMLInputElement>)=>
                    setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
     );
}

export default Login;