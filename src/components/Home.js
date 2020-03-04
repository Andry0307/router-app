import React from 'react';

function Home(props) {
    console.log('date', Date().toString())
    return (
        <div className='home-page'>
            <h1>welcome to the best school</h1>
        </div>
    );
}

export default Home;