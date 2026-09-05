import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    email: string;
}

function Users() {
    const [users,setUsers]=useState<User[]>([]);
    const [loading,setLoading]=useState<boolean>(true);
    const [error,setError] = useState<string | null>(null);

    useEffect(()=>{
         const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok) {
                    throw new Error("Failed to fetch Data")
                }
                const json = await response.json();
                setUsers(json); //update state
            } catch (error) {
                if(error instanceof Error)
                    setError(error.message)
                else
                    setError("Something went wrong")
            }
            finally{
                setLoading(false)
                // setTimeout(()=>{
                //     setLoading(false)
                // },2000)
            }
        }
        fetchData();
    },[])
    if(loading){
        return <h3>Loading.........</h3>
    }
    if(error){
        return <h3 style={{color: "red"}}>Error: {error}</h3>
    }
    return ( 
         <>
            <h1>User's List</h1>
            {
                users.map(user => (
                    <div key={user.id}>
                        <h3>Name: {user.name}</h3>
                        <p>Email: {user.email}</p>
                    </div>
                ))
            }
        </>
     );
}

export default Users;