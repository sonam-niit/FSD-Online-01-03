import Counter from "./components/Counter"
import Dashboard from "./components/Dashboard"
import Employee from "./components/Employee"
import EmployeeCard from "./components/EmployeeCard"
import FruitList from "./components/FruitList"
import Greeting from "./components/greeting"
import UserData from "./components/UserData"

function App() {
  const flag:boolean=false;
  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>

      <UserData />
      <Counter />
      <FruitList />
      <Employee />
      { flag && <Dashboard />}
      {/* Dashoboard visible only if flag is true */}
      <h1>Parent Component</h1>
      {/* Passing Single Props */}
      <Greeting name="Sonam" />
      <Greeting name="John Doe" />
      {/* Passing Multiple Props */}
      <EmployeeCard id={101} name="Sonam" salary={50000} isActive={true} />
      <EmployeeCard id={102} name="John Doe" salary={40000} isActive={false} />
    </div>
  )
}

export default App
