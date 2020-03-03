import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <nav className='nav-link bg-secondary'>
            <Link to={`/`}>
                <button className='btn btn-success'>Home</button>
            </Link>
            <Link to={`/groups`}>
                <button className='btn btn-success'>Groups</button>
            </Link>
            <Link to={`/students`}>
                <button className='btn btn-success'>Students</button>
            </Link>
        </nav>
    );
}

export default Header;