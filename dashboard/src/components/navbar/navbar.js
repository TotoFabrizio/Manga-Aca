import React from "react";
import { Link } from "react-router-dom";

function navBar() {
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <div className="container-fluid d-flex align-itmes-end justify-content-center ">
                <div className="flex-fill"></div>
                <div className="topbar-divider d-none d-sm-block"></div>
                <Link className="d-flex align-itmes-end justify-content-center" to="/login">
                    <span>Login</span>
                </Link>
            </div>
        </nav>  
    );
}

export default navBar;