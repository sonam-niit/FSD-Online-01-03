import { Link, Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate= useNavigate();
    return ( 
        <div>
            <h2>Dashboard</h2>
            <button onClick={()=>navigate(-1)}>Back</button>
            <nav>
                <Link to="profile">Profile</Link> |
                <Link to="settings">Settings</Link> 
            </nav>

            <Outlet />
        </div>
     );
}

export default Dashboard;