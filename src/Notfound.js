import { Link } from "react-router-dom"

const Notfound = () => {
    return ( 
        <div>
            <h1>Sorry... 404</h1>
            <p>This page not found</p>
            <Link to='/'>Go Back </Link>
        </div>
     );
}
 
export default Notfound;