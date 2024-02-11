// import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

import useFetch from "./useFetch";

const Home = () => {

    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [errormsg, setErrormsg] = useState(null);

    // const [name, setName] = useState('mario');

    // const title = "Home Page";

    // function handlDelete(params) {
    //     const newBlog = blogs.filter( blog => blog.id !== params);
    //     setBlogs(newBlog);
    // }
    
    // function changeName() {
    //      setName("Luigi");
    // }
    
    //  useEffect(() => {
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogss')
    //         .then(res => {
    //             if(!res.ok)
    //             {
    //                 throw Error("Could Not Fetch The Data");
    //             }
    //             return res.json();
    //         })
    //         .then(data => {
    //             setBlogs(data);
    //             setIsPending(false);
    //             setErrormsg(null);
    //         })
    //         .catch(err => {
    //             console.log(err.message);
    //             setIsPending(false);
    //             setErrormsg(err.message);
    //         })
    //     }, 1000);
    // }, []);

    const {data: blogs, isPending, errormsg} = useFetch('https://basic-react-blog.vercel.app/blogs');
     
       
    return (
        <div className="home">
            {/* {blogs && <Bloglist blogs={blogs} title="All Blogs" handlDelete={handlDelete} />} */}
            
            {isPending && <div>Loading...</div>}
            {errormsg && <div>{ errormsg }</div>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs" />}

            {/* <button onClick={() => changeName()}>Change</button> */}
            {/* <p>{name}</p> */}

            {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
        </div>
    );
}
 
export default Home;
