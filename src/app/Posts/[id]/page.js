import Link from "next/link";
export default async function SelectedPost() {
    const response= await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const post=await response.json();
    
    return (
    <>
    <h1>Post</h1>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    </>
    );}