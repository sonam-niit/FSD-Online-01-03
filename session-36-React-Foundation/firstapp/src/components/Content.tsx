const name: string = "Sonam Soni";
const isLoggedIn: boolean = false;

function Content() {
    return (
        <>
            <h1>Welcome to React</h1>
            <h2>Good Morning {name}</h2>
            <h2>{isLoggedIn ? "Welcome User" : "Please Login Here"}</h2>
        </>
    )
}
export default Content