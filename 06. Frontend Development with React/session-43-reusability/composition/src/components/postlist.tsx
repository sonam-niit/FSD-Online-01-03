import { useEffect, useState } from "react";
import Card from "./Card";

type Post = {
    id?: number;
    title:string;
    body:string;
    userId:number;
}

function PostList() {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(()=>{
        const fetchData=async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const json = await response.json();
            setPosts(json);
        }

        fetchData();
    },[])

    return ( 
        <>
            <h1>Posts</h1> <hr/>
            {
                posts.map(post=>(
                    <Card title={post.title} key={post.id}>
                        <p>{post.body}</p>
                        <small>{post.userId}</small>
                    </Card>
                ))
            }
        </>
     );
}

export default PostList;