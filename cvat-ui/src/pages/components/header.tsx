import React from 'react';

export default function header() {
    return (
        <>
            <div className='header'>
                <div className='logo'></div>
                <div className='align_wrap'>
                    <ul className='nav_menu'>
                        <li>Demo</li>
                        <li>Product</li>
                        <li>Solution</li>
                    </ul>
                    <div className='login'>Sign in</div>
                </div>
            </div>
        </>
    );
}
