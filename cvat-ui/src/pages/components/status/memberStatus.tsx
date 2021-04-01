import React, { useState } from 'react';

export default function MemberStatus() {
    const [open, setOpen] = useState({
        view: false,
        state: 0,
    });
    const tags = [
        {
            tag: 'tag1',
            color: 'orange',
        },
        {
            tag: 'tag2',
            color: 'red',
        },
        {
            tag: 'tag3',
            color: 'orange',
        },
    ];
    return (
        <>
            <div
                className={open.view ? 'active tableItem tableWid host_member' : 'tableItem tableWid host_member'}
                onClick={() => setOpen({ ...open, view: !open.view })}
            >
                <div className='memberInfo text-left'>
                    <span className='memberImg'>
                        <span className='ic people'></span>
                    </span>
                    <span className='memberName'>host</span>
                </div>
                <div className='date'>2021.01.28</div>
                <div className='date'>2021.01.28</div>
                <div className='status'>
                    <span className='ic check'></span>
                </div>
                <div className='more'>
                    <span className='ic more'>More</span>
                </div>
                {open.view && (
                    <div className='tagLists text-left'>
                        <span className='addTags'>Add tag</span>
                        <div>
                            {tags.map((tags) => {
                                return <span className={'tag ' + tags.color}>{tags.tag}</span>;
                            })}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
