interface GreetingProps {
    name: string;
}
function Greeting({ name }: GreetingProps) {
    return <h2
        style={{
            border: "2px solid blue",
            padding: "10px"
        }}>
        Hello, {name}</h2>
}

export default Greeting;