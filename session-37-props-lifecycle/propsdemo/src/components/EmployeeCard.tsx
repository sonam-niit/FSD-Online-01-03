interface EmployeeProps {
    id: number;
    name: string;
    salary: number;
    isActive: boolean;
}
function EmployeeCard({ id, name, salary, isActive }: EmployeeProps) {

    return (
        <div style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px"
        }}>
            <h3>{name}</h3>
            <p>ID: {id}</p>
            <p>Salary: ${salary}</p>
            <p>Status: {isActive ? "Active" : "Inactive"}</p>
            {/* conditional rendering */}
        </div>
    )
}

export default EmployeeCard;