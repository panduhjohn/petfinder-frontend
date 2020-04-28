import React from 'react';

import './Home.css';

function Home() {
    return (
        <div>
            <div className='headers'>
                <div className='text-box'>
                    <h1 className='heading-primary'>
                        <span className='heading-primary-main'>
                            Pets available for adoption.
                        </span>
                        <span className='heading-primary-sub'>
                            Loving pets looking for a forever home.
                        </span>
                    </h1>
                    <a href='/organization' className='btn btn-white btn-animated'>
                        Discover your best friend
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
