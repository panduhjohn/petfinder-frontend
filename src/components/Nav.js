import React from 'react';

import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'blue'
    }

    return (
        <nav>
            <img style={{height: '100px', width: '150px'}} src="/images/logo.png" alt="logo"/>
            <ul className='navLinks'>
                <Link style={navStyle} to={'/'}>
                    <li>Home</li>
                </Link>
                <Link to={'/dogs'}>
                    <li>Dog</li>
                </Link>
                <Link to={'/horse'}>
                    <li>Horse</li>
                </Link>
                <Link to={'/cats'}>
                    <li>Cat</li>
                </Link>
                <Link to={'/organzation'}>
                    <li>Organization</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
