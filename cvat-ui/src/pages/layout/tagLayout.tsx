import React, { useState } from 'react';
import TagPage from '../../pages/tag/TagPage';

export default function DefaultLayout() {
    const [tabState, setTabState] = useState(0);

    return (
        <>
            <div className='headerTab'>&lt; Home</div>
            <div className='container'>
                <div className='sideTag'>
                    <ul>
                        <li className={tabState === 0 ? 'active' : ''} onClick={() => setTabState(0)}>
                            Tag
                        </li>
                        <li className={tabState === 1 ? 'active' : ''} onClick={() => setTabState(1)}>
                            Detection
                        </li>
                        <li className={tabState === 2 ? 'active' : ''} onClick={() => setTabState(2)}>
                            Segmentation
                        </li>
                    </ul>
                </div>
                <div className='containerViewer'>
                    <TagPage tab={tabState} />
                </div>
            </div>
        </>
    );
}
