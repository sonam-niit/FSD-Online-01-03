import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { User } from "../types/user";

function UserList() {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const json = await response.json();
            setUsers(json)
        }
        fetchData();
    }, [])
    return (
        <>
            <h2>User List</h2>
            <div>
                {
                    users.map((user) => (
                        <div>
                            <h3 key={user.id}> {user.name} <Link to={`/users/${user.id}`}>👁</Link> </h3>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default UserList;