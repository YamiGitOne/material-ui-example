import {useLoaderData} from 'react-router-dom';

const Post = () =>{
    const {post} = useLoaderData()

    return (
        <>
        <h1>{post.id} - {post.title}</h1>
        <p>{post.body}</p>
        </>
    );
}

export default Post;

export const LoaderPost = async ({params}) => {
const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

//mensaje de error
if (!res.ok) throw({
 status: res.status,
 statusText: 'No encontrado',
});

const post = await res.json();
return {post};
}