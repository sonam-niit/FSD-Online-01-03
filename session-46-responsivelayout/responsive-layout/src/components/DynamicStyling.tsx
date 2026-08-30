import { useState } from "react";
import Button from "./Button";

function DynamicStyling() {
    const [isActive, setIsActive] = useState<boolean>(true)
    return (
        <div>


            <button className={isActive
                ? "bg-blue-600 text-white px-4 py-2 rounded"
                : "bg-gray-600 text-gray-800 px-4 py-2 rounded"}>
                Click Me</button>

            <br /><br />

            <button onClick={() => setIsActive(!isActive)}>Change</button>


            <button className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">
                Save Changes
            </button>

            <div className="flex gap-4 p-8">
                <Button variant="primary">Save</Button>
                <Button variant="secondary">Cancel</Button>
                <Button variant="success">Submit</Button>
                <Button variant="danger">Delete</Button>
            </div>
        </div>
    );
}

export default DynamicStyling;