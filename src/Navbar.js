import { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {

    const [userName, setUserName] = useState("Dojo");

    function LoginChange() {
        setUserName("Shahadat Hossain");
    }

    // function LogOutChange(userName, e) {
    //     console.log("Good Bye"+userName, e.target);
    // }

    return ( 
        <nav className="navbar">
            <h1> {userName} Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a> */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                {/* <a href="/create">New Blog</a> */}
                <button onClick={LoginChange}>LogIn</button>
                {/* <button onClick={(e) => {
                    LogOutChange(' Raiyan', e);
                }}>LogOut</button> */}
 
            </div>
        </nav>
     );
}
 
export default Navbar;