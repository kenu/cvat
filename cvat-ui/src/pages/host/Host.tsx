import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MemberStatus from '../components/status/memberStatus';
import ProjectStauts from '../components/status/projectStatus';

export default function HostPage() {
    const [state, setState] = useState(0);
    const [focusTab, setFocusTab] = useState(0);
    return (
        <>
            <div className='defaultContents'>
                <div className='memberContents'>
                    {state === 0 && (
                        <>
                            <div className='projectContainer team'>
                                <div className='scription'>
                                    <div className='teamInfo'>
                                        <div className='teamImg'>
                                            <span className='ic people'></span>
                                        </div>
                                        <div className='teamTitle'>Team 1</div>
                                        <span className='edit'>Edit</span>
                                    </div>
                                    <div className='teamContext'>
                                        <p>description</p>
                                    </div>
                                </div>
                                <div className='members'>
                                    <div className='sectionTitle'>
                                        Member <span className='pr_leng'>9</span>
                                        <span className='ic_wrap'>
                                            <span className='ic viewer'></span>
                                            <span className='ic excel'></span>
                                        </span>
                                    </div>
                                    <div className='create btn'>+ Add member</div>
                                    <div className='itemLists'>
                                        <ul>
                                            <li>
                                                <div className='visibleItem'>
                                                    <div className='itemInfo'>
                                                        <span className='itemImg'></span>
                                                        <span className='itemName'>Host</span>
                                                    </div>
                                                    <div className='percent'>
                                                        <div className='progress'>
                                                            <span style={{ width: '40%' }}></span>
                                                        </div>
                                                        <span className='per'>40%</span>
                                                    </div>
                                                    <span className='icon'>
                                                        <span className='ic check'></span>
                                                    </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='visibleItem'>
                                                    <div className='itemInfo'>
                                                        <span className='itemImg'></span>
                                                        <span className='itemName'>Host</span>
                                                    </div>
                                                    <div className='percent'>
                                                        <div className='progress'>
                                                            <span style={{ width: '40%' }}></span>
                                                        </div>
                                                        <span className='per'>40%</span>
                                                    </div>
                                                    <span className='icon'>
                                                        <span className='ic check'></span>
                                                    </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='visibleItem'>
                                                    <div className='itemInfo'>
                                                        <span className='itemImg'></span>
                                                        <span className='itemName'>Host</span>
                                                    </div>
                                                    <div className='percent'>
                                                        <div className='progress'>
                                                            <span style={{ width: '40%' }}></span>
                                                        </div>
                                                        <span className='per'>40%</span>
                                                    </div>
                                                    <span className='icon'>
                                                        <span className='ic check'></span>
                                                    </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='visibleItem'>
                                                    <div className='itemInfo'>
                                                        <span className='itemImg'></span>
                                                        <span className='itemName'>Host</span>
                                                    </div>
                                                    <div className='percent'>
                                                        <div className='progress'>
                                                            <span style={{ width: '40%' }}></span>
                                                        </div>
                                                        <span className='per'>40%</span>
                                                    </div>
                                                    <span className='icon'>
                                                        <span className='ic check'></span>
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div>
                                            <span className='btn more'>More ▼</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='project'>
                                    <div className='sectionTitle'>
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
                    {state === 1 && (
                        <>
                            <div className='projectContainer'>
                                <div className='pageHeader'>
                                    <span className='back'>
                                        <span className='ic back'></span>Back
                                    </span>
                                    <span className='right_ic ic excel'></span>
                                </div>
                                <div className='MemberState'>
                                    <div className='memberTitle'>
                                        <div className='memberInfo'>
                                            <span className='memberImg'>
                                                <span className='ic people'></span>
                                            </span>
                                            <span className='memberName'>Member 6</span>
                                        </div>
                                        <div className='ic trash'></div>
                                    </div>
                                    <div className='projectstatus'>
                                        <div className='sectionTitle'>Project status</div>
                                        <div className='status'>
                                            <div className='statusExplain'>
                                                <div></div>
                                                <div>Start</div>
                                                <div>Last</div>
                                                <div>Status</div>
                                            </div>
                                            <div className='itemLists'>
                                                <ul>
                                                    <li
                                                        className={focusTab === 0 ? 'focus' : ''}
                                                        onClick={() => setFocusTab(0)}
                                                    >
                                                        <ProjectStauts visible={focusTab === 0 ? true : false} />
                                                    </li>
                                                    <li
                                                        className={focusTab === 1 ? 'focus' : ''}
                                                        onClick={() => setFocusTab(1)}
                                                    >
                                                        <ProjectStauts visible={focusTab === 1 ? true : false} />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {state === 2 && (
                        <>
                            <div className='projectContainer'>
                                <div className='pageHeader'>
                                    <span className='back'>
                                        <span className='ic back'></span>Back
                                    </span>
                                    <span className='right_ic ic excel'></span>
                                </div>
                                <div className='statusTab'>
                                    <div className='statusWrap'>
                                        <span className='statusText'>Last modified date</span>
                                        <p className='text-center'>2021.01.25</p>
                                    </div>
                                    <div className='statusWrap'>
                                        <div className='percent'>
                                            <span className='statusText'>Last modified date</span>
                                            <p className='text-center'>99%</p>
                                            <div className='progress'>
                                                <span style={{ width: '99%' }}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='statusImgTab'>
                                    <div className='imgTab'></div>
                                    <div className='statusWrap'>
                                        <span className='statusText'>Tag, detection, segmentation</span>
                                        <div className='progressStatus'>
                                            <div>
                                                <p>1. chaire</p>
                                                <div className='percent'>
                                                    <div className='progress'>
                                                        <span style={{ width: '99%' }}></span>
                                                    </div>
                                                    <div className='per'>99%</div>
                                                </div>
                                            </div>
                                            <div>
                                                <p>2. lamp</p>
                                                <div className='percent'>
                                                    <div className='progress'>
                                                        <span style={{ width: '86%' }}></span>
                                                    </div>
                                                    <div className='per'>86%</div>
                                                </div>
                                            </div>
                                            <div>
                                                <p>3. chaire</p>
                                                <div className='percent'>
                                                    <div className='progress'>
                                                        <span style={{ width: '68%' }}></span>
                                                    </div>
                                                    <div className='per'>68%</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='more'>
                                            <span className='btn more gray'>More</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='tableWrap'>
                                    <span className='tableName'>Member</span>
                                    <div className='tableWid host_member'>
                                        <div></div>
                                        <div>Start</div>
                                        <div>Last</div>
                                        <div>Status</div>
                                        <div></div>
                                    </div>
                                    <div className='tableLists'>
                                        <MemberStatus />
                                        <MemberStatus />
                                        <MemberStatus />
                                        <MemberStatus />
                                        <MemberStatus />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
