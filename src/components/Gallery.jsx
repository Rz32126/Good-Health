import React from 'react';

const Gallery = () => {
    return (
        <div>
            <h1 className='text-3xl text-blue-400 text-center font-semibold mb-4 mt-4'>Meet Our Happy Team Members</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-3'>
                <img className="h-64 w-96 object-cover" src="https://i.ibb.co.com/4Z6wbG7h/Screenshot-2025-02-18-235803.png"></img>
                <img className="h-64 w-96 object-cover" src="https://i.ibb.co.com/MybGjSJT/Screenshot-2025-02-18-235824.png"></img>
                <img className="h-64 w-96 object-cover" src="https://i.ibb.co.com/mFDwnDdK/Screenshot-2025-02-18-235850.png"></img>
            </div>
        </div>
    );
};

export default Gallery;