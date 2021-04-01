import React, { useState } from 'react';

interface projectStautsProps {
    visible: boolean;
}

export default function ProjectStauts(props: projectStautsProps) {
    return (
        <>
            <div className='visibleItem'>
                <div className='itemInfo'>
                    <span className='itemImg folder'>
                        <span className='ic folder'></span>
                    </span>
                    <span className='itemName folder'>Project 1</span>
                </div>
                <div className='stDate'>2021.01.03</div>
                <div className='endDate'>2021.01.27</div>
                <div className='percent'>
                    <div className='progress'>
                        <span style={{ width: '50%' }}></span>
                    </div>
                    <span className='per'>50%</span>
                </div>
                <div className='icon'>
                    <span className='ic more bottom gray'>More</span>
                </div>
            </div>
            {props.visible && (
                <>
                    <div className='hiddenItem'>
                        <div className='itemInfo'>
                            <span className='itemImg folder'>
                                <span className='ic folder'></span>
                            </span>
                            <span className='itemName folder'>Project 1</span>
                        </div>
                        <div className='stDate'>2021.01.03</div>
                        <div className='endDate'>2021.01.27</div>
                        <div className='percent'>
                            <span className='ic check'></span>
                        </div>
                        <div className='icon'>
                            <span className='ic more bottom gray'>More</span>
                        </div>
                    </div>
                    <div className='hiddenItem'>
                        <div className='itemInfo'>
                            <span className='itemImg folder'>
                                <span className='ic folder'></span>
                            </span>
                            <span className='itemName folder'>Project 1</span>
                        </div>
                        <div className='stDate'>2021.01.03</div>
                        <div className='endDate'>2021.01.27</div>
                        <div className='percent'>
                            <span className='ic check'></span>
                        </div>
                        <div className='icon'>
                            <span className='ic more bottom gray'>More</span>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
