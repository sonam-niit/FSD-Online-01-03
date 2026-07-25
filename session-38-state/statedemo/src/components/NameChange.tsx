import { useState, type ChangeEvent, type SubmitEvent } from "react";

function NameChange() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setFirstName(event.target.value)
    }
    const handleSubmit=(event:SubmitEvent<HTMLFormElement>)=>{
        event.preventDefault()
        alert("Data Saved "+firstName+" "+lastName)
    }
    return (
        <>
            <h1>Hello {firstName} {lastName}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter First Name"
                    onChange={handleChange} />
                <input type="text" placeholder="Enter Last Name"
                    onChange={(e) => { setLastName(e.target.value) }} />
                <button type="submit">Save Data</button>
            </form>
        </>
    );
}

export default NameChange;