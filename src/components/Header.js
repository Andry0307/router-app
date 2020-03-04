import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <nav className='nav-link bg-secondary'>
            <span className="navbar-brand mb-0 h1">It school</span>
            <Link to={`/`}>
                <button className='btn btn-info'>Home</button>
            </Link>
            <Link to={`/groups`}>
                <button className='btn btn-info'>Groups</button>
            </Link>
            <Link to={`/students`}>
                <button className='btn btn-info'>Students</button>
            </Link>
        </nav>
    );
}

export default Header;