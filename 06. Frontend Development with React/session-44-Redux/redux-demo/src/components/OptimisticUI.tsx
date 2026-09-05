import { useState } from "react";

function OptimisticUI() {
    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLike = async () => {
        const prevState = liked;
        //optimistic update
        setLiked(!liked);
        setLoading(true)
        // now it will connect server to simulate API
        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    //code to work server
                    resolve(true)
                }, 1500)
            })
            console.log("APPI Succcess");
        } catch (error) {
            //if error then Rollback
            setLiked(prevState);
            console.log("API failed - UI rolled Back"); 
        } finally {
            setLoading(false)
        }
    }
    return ( 
        <div style={{ padding: "40px", textAlign:"center"}}>
            <h2>optimistic UI</h2>
            <button onClick={handleLike}>
                {liked ? "♥️ Liked": "♡ Like"}
            </button>

            <p>{loading? "Saving to server" : "CLick the button to like/dislike"}</p>
        </div>
     );
}

export default OptimisticUI;