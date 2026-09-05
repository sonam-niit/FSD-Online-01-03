function Dashboard(){
    const isLoggedIn:boolean=true;

    if(isLoggedIn)
        return <h1>Welcome User!</h1>
    else 
        return <h1>Please Login!</h1>
}

export default Dashboard;
// conditional rendering