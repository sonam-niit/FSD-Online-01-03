type UserProps = {
    name: string
}

function User({name} : UserProps) {
    return ( 
        <>
            <h2>Hello {name}</h2>
        </>
     );
}

export default User;