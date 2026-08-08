import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../types/user";

function Details() {
    const {id} = useParams(); // get data from URL

    const [user, setUser] = useState<User|undefined>(undefined)
    
        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                const json = await response.json();
                setUser(json)
            }
            fetchData();
        }, [])

    return ( 
        <>
            <h2>Details Component: {id}</h2>
            <h3>Name: {user?.name}</h3>
            <h3>Email: {user?.email}</h3>
            <p>
                Address: {user?.address.street}, {user?.address.city}, {user?.address.suite}
                , {user?.address.zipcode}
            </p>
            <p>
                Geo Locations: {user?.address.geo.lat}, {user?.address.geo.lng}
            </p>
        </>
     );
}

export default Details;