function DemoWithoutState() {
    let name: string = "Hello";
    const handleClick = () => {
        console.log("Before change",name);
        name = "Sonam Soni";
        console.log("After change",name);
    }
    return (
        <>
            <h2>Welcome {name}</h2>
            <button onClick={handleClick}>Change Value</button>
        </>
    );
}

export default DemoWithoutState;