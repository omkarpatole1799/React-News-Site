import React from 'react'
import { Link, Outlet } from "react-router-dom";
function Work() {
    return (
        <>
            <div className="container text-center py-4">
                <Link className="btn btn-primary text-decoration-none text-light m-2" to="news">News</Link>
                <Link className="btn btn-primary text-decoration-none text-light m-2" to="counter">Counter</Link>
                <Link className="btn btn-primary text-decoration-none text-light m-2" to="login-form">Login</Link>
                <Link className="btn btn-primary text-decoration-none text-light m-2" to="table">Table</Link>
                <Link className="btn btn-primary text-decoration-none text-light m-2" to="text-operation">Text-Utilities</Link>
            <Outlet />
            </div>
        </>
    )
}

export default Work