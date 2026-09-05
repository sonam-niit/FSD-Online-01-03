function Buttons() {
    return (
        <div>

            <button className="bg-blue-600 text-white px-4 py-3 rounded-xl 
            hover:bg-blue-700 transition mx-4">Primary</button>

            <button className="bg-gray-600 text-white px-4 py-3 rounded-xl 
            hover:bg-gray-700 transition mx-4">Secondary</button>

            <button className="bg-yellow-600 text-white px-4 py-3 rounded-xl 
            hover:bg-yellow-700 transition mx-4">Warning</button>

            <button className="bg-red-600 text-white px-4 py-3 rounded-xl 
            hover:bg-red-700 transition mx-4">Error</button>
        </div>
    );
}

export default Buttons;