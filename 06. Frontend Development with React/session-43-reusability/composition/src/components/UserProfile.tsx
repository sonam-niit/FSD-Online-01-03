import Card from "./Card";

function UserProfile() {
    const data = [{id:1, name: "Alex", role: "Software Tester" },
    { id:2, name: "Bobby", role: "Software Developer" },
    { id:3, name: "Sonam", role: "Full Stack Developer" }
    ]
    return (
        <>
            {data.map(user => (
                <Card title={user.name} key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Role: {user.role}</p>
                    <button>View Profile</button>
                </Card>
            ))}
        </>

    );
}

export default UserProfile;