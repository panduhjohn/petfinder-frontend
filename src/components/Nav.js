import React from 'react';

import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <img
                style={{ height: '100px', width: '180px' }}
                src='/images/logo.png'
                alt='logo'
            />
            <ul className='navLinks'>
                <Link to={'/'}>
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
                <Link to={'/organization'}>
                    <li>Rescue Organizations</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
