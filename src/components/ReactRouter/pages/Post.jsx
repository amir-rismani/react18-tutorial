import { Link, useParams } from "react-router-dom"
const posts = [
    { id: 1, title: "Javascript Course", body: "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions." },
    { id: 2, title: "React.js Course", body: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript." },
    { id: 3, title: "Next.js Course", body: "Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation." },
];
function Posts() {
    const params = useParams();
    console.log(params)
    const post = posts.find(post => post.id === Number(params.id));
    console.log(post)
    return (
        <div>
            <h1>Post Page</h1>
            <p><strong>post id:</strong> {post.id}</p>
            <p><strong>post title:</strong> {post.title}</p>
            <p><strong>post body:</strong> {post.body}</p>
            <Link to="/posts">Go to posts</Link>
        </div >
    )
}

export default Posts