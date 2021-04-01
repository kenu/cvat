import React from 'react';

import Header from '../components/header';
import Main from '../main/Main';

export default function mainLayout() {
    return (
        <>
            <Header />
            <div className='container'>
                <Main />
            </div>
        </>
    );
}
