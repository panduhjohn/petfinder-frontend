import React from 'react';

import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'blue'
    }
    return (
        <nav>
            <h3>Awesome Logo</h3>
            <ul className='navLinks'>
                <Link style={navStyle} to={'/'}>
                    <li>Home</li>
                </Link>
                <Link to={'/dogs'}>
                    <li>Dogs</li>
                </Link>
                <Link to={'/horse'}>
                    <li>Horse</li>
                </Link>
                <Link to={'/shop'}>
                    <li>Shop</li>
                </Link>
                <Link to={'/contact'}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
