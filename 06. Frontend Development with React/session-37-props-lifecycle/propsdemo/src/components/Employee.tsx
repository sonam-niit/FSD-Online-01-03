interface Employee {
    id: number;
    name: string;
    salary: number;
}

function Employee(){
    const employees:Employee[]=[
        {id:101,name:"Sonam",salary:567890},
        {id:102,name:"Rahul",salary:45000},
        {id:103,name:"Amit",salary:567000}
    ]

    return (
        <div>
            <h2>Employee List</h2>
            {
                employees.map(emp=>(
                    <div key={emp.id}>
                        <h3>{emp.name}</h3>
                        <p>ID:{emp.id}</p>
                        <p>Salary:{emp.salary}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Employee;