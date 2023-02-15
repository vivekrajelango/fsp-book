import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link to='/post' className="nav-link">
                            Create Post
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/profile/:0' className="nav-link">
                            Profile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar