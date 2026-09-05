import { useState, type ChangeEvent, type SubmitEvent } from "react";

interface User {
    name: string;
    email: string;
    age: number;
}
function Register() {
    const [user, setUser] = useState<User>({ name: "", email: "", age: 0 })
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit=(e:SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        alert(`${user.name} {user.email} {user.age}`)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" name="name"
                    placeholder="Enter Name"
                    onChange={handleChange}
                    value={user.name}
                />
                <input
                    type="email" name="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    value={user.email}
                />
                <input
                    type="number" name="age"
                    placeholder="Enter Age"
                    onChange={handleChange}
                    value={user.age}
                />
                <button type="submit">Register</button>
            </form>
        </>
    );
}

export default Register;