import { useState, useTransition } from "react";


function TrasitionDemo() {

    const [input, setInput] = useState("");
    const [list, setList] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();

    const handleChange = (value: string) => {
        setInput(value);

        startTransition(() => {
            const newList = Array.from({ length: 5000 }, (_, index) => `${value} - Item ${index + 1}`);
            setList(newList);
        })
    }
    return (
        <div>
            <h1>Use trasition Demo</h1>
            <input value={input} onChange={(e) => handleChange(e.target.value)} />

            {isPending && <p>Loading list...</p>}
            <ul>
                {
                    list.slice(0, 20).map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TrasitionDemo;