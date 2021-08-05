import { Link } from "react-router-dom";

const Bloglist = ({blogs,title}) => {
    // const Bloglist = ({blogs,title, handlDelete}) => {

    // const blogs = props.blogs;
    // const title = props.title;

    // console.log(props.blogs);


    return ( 
        <div className="blog-list">
            <h3>{title}</h3>
            {blogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h3>{blog.title}</h3>
                    <p><b>Written By: </b>{blog.author}</p>
                    {/* <button onClick={() => handlDelete(blog.id)}>Delete</button> */}
                    </Link>
                </div>
            ))} 
        </div>
     );
}
 
export default Bloglist;