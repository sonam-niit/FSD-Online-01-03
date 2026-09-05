import { useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [uname,setUname]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();

    const handleSubmit=(e:SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(uname==="admin" && password==="admin123"){
            localStorage.setItem("isLoggedIn","true");
             navigate("/dashboard");
        }
        else{
            // alert("Invalid credentials");
             throw new Error("Invalid credentials!");
        }
    }
    return ( 
        <>
            <h2>Login Component</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter username" onChange={(e)=>setUname(e.target.value)}/>
                <br/><br/>
                <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                <br/><br/>
                <button type="submit">Login</button>
            </form>
        </>
     );
}

export default Login;