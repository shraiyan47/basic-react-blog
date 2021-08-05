import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const {data: blog, error, isPending} = useFetch("http://localhost:8000/blogs/"+id);
    const history = useHistory();
    const nextPage = parseInt(id)+1;

    console.log(blog);

    function nextBlogHandler() {
        history.push("/blogs/"+nextPage);
    }

    function deleteHandler(id) {
        fetch("http://localhost:8000/blogs/"+id,{
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details"> 
            { isPending && <div>L O A D I N G . . .</div>}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={() => nextBlogHandler()}>Next Blog Post</button>
                    <button onClick={() => deleteHandler(id)}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;