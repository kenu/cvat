import React, { useState } from 'react';

export default function SideBar() {
    const teamList = useState([{ name: 'team1', member: 1, state: 0 }]);

    return (
        <>
            <div className='sideNav'>
                <div className='sideWrap'>
                    <ul>
                        <li>Team</li>
                    </ul>
                </div>
                <div className='upgrade_btn'>Upgrade</div>
            </div>
        </>
    );
}
