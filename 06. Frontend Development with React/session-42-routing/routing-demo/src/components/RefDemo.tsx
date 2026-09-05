import { useRef } from "react";

function SearchPage() {

    const inputRef = useRef<HTMLInputElement>(null);
    const focusInput = ()=>{
        inputRef.current?.focus();
    }
    return ( 
        <>
            <h2>Product Search</h2>
            <div>
                <input ref={inputRef} placeholder="Search products....."/>

                <button onClick={focusInput}>Search</button>
            </div>
        </>
     );
}

export default SearchPage;