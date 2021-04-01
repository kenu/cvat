import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MemberPage() {
    const [state, setState] = useState(0);
    return (
        <>
            <div className='defaultContents'>
                <div className='memberContents'>
                    {state === 0 && (
                        <div className='createContainer'>
                            <div>
                                <p>Create your Team</p>
                                <div
                                    className='create btn'
                                    onClick={() => {
                                        setState(1);
                                    }}
                                >
                                    + Create team
                                </div>
                            </div>
                        </div>
                    )}
                    {state === 1 && (
                        <>
                            <div className='projectContainer team'>
                                <div className='scription'>
                                    <div className='teamInfo'>
                                        <div className='teamImg'>
                                            <span className='ic people'></span>
                                        </div>
                                        <div className='teamTitle'>Team 1</div>
                                    </div>
                                    <div className='teamContext'>
                                        <p>description</p>
                                    </div>
                                </div>
                                <div className='project'>
                                    <div className='projectTitle'>
                                        Team Project <span className='pr_leng'>3</span>
                                    </div>
                                    <div className='create btn'>+ Add project</div>
                                </div>
                                <div className='projectLists'>
                                    <div
                                        className='pr_folder'
                                        onClick={() => {
                                            setState(2);
                                        }}
                                    >
                                        <div className='ic folder'></div>
                                        <div className='progress'>
                                            <div className='per'>99%</div>
                                            <div className='pr_bar'>
                                                <span style={{ width: '99%' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className='pr_folder'
                                        onClick={() => {
                                            setState(2);
                                        }}
                                    >
                                        <div className='ic folder'></div>
                                        <div className='progress'>
                                            <div className='per'>64%</div>
                                            <div className='pr_bar'>
                                                <span style={{ width: '64%' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className='pr_folder'
                                        onClick={() => {
                                            setState(2);
                                        }}
                                    >
                                        <div className='ic folder'></div>
                                        <div className='progress'>
                                            <div className='per'>21%</div>
                                            <div className='pr_bar'>
                                                <span style={{ width: '21%' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {state === 2 && (
                        <>
                            <div className='projectContainer team'>
                                <div className='scription'>
                                    <div className='teamInfo'>
                                        <div className='teamImg'>
                                            <span className='ic people'></span>
                                        </div>
                                        <div className='teamTitle'>Team 1</div>
                                    </div>
                                    <div className='teamContext'>
                                        <p>description</p>
                                    </div>
                                </div>
                                <div className='project'>
                                    <div className='projectTitle'>
                                        Team Project <span className='pr_leng'>3</span>
                                    </div>
                                    <div className='btn outCreate'>Annotate</div>
                                    <div className='btn create'>+ Add project</div>
                                </div>
                                <div className='projectLists'>
                                    <Link to='/tag' className='pr_folder asImg'>
                                        <div className='ic check'></div>
                                        <div className='progress'>
                                            <div className='per'>99%</div>
                                            <div className='pr_bar'>
                                                <span style={{ width: '99%' }}></span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to='/tag' className='pr_folder asImg'>
                                        <div className='ic check red'></div>
                                        <div className='progress'>
                                            <div className='per'>64%</div>
                                            <div className='pr_bar'>
                                                <span style={{ width: '64%' }}></span>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to='/tag' className='pr_folder asImg'>
                                        <div className='ic check gray'></div>
                                        <div className='progress'>
                                            <div className='per'>21%</div>
                                            <div className='pr_bar'>
                                                <span style={{ width: '21%' }}></span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
