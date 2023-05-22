import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
const Blog = () =>{
    const {posts} = useLoaderData();
    return (
        <ul>
        {posts.length > 0 ? (
            posts.map((posts) => (
                <li key={posts.id}>
                    <Link to={`/blog/${posts.id}`}>{posts.id}-{posts.title}</Link>
                </li>
            ))
        ) : (
            <li>No blogs found</li>
        )}
    </ul>
    );
}

export default Blog;


//exportación nombrada para llevar a una función externa
//así evito usar el useEffect
export const loaderBlog = async () =>{
 const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
 const posts = await res.json();
 return {posts};
};