import MouseTracker from "./MouseTracker";
import User from "./User";
import withLoading from "./withLoading";


function Home() {
    const UserWithLoading = withLoading(User); // HOC for enhancing User
    return ( 
        <>
            <h1>Home Component</h1>
            <UserWithLoading name="Sonam" loading={false} />

            <MouseTracker render={(x,y)=>(<h2>Mouse: {x}, {y}</h2>)} />
            {/* render props, passing function as props */}
        </>
     );
}

export default Home;