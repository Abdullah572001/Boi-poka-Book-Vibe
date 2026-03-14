import React from 'react';
import bookImage from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className='flex items-center justify-between px-28 py-20'>
            <div>
                <h1>Books to freshen up <br className='hidden lg:block' /> your bookshelf</h1>
            </div>
            <div>
                <img src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;