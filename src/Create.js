import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending, setIsPending] = useState(false);

    const history = useHistory();

    function submitHandler(e) {
        e.preventDefault();
        const blog = {title, body:details, author};
        console.log(blog);

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("NEW BLOG ADDED ");
            setIsPending(false);
            history.push("/");
        })
    }

    return ( 
        <div className="create">
            <h1>Create Blog</h1>
            <form onSubmit={submitHandler}>
                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value) }
                />
                <label>Blog Details</label>
                <textarea 
                    required
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                >
                </textarea>
                <label>Blog Author</label>
                <select name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>} 
                {isPending && <button disabled>Adding Blog</button>} 
            </form>
        </div>
     );
}
 
export default Create;