import React from 'react';

export default function Main() {
    return (
        <>
            <div className='mainPage'>
                <div className='mainContents'>
                    <div className='info product'>
                        <div className='align_wrap'>
                            <div className='textContents'>
                                <div className='text'>
                                    <div className='contentTitle'>Product information</div>
                                    <div className='subTitle'>
                                        AI image tag.
                                        <div className='btn orangeOutline sm'>
                                            learn more <span className='ic more'></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='btnWrap'>
                                    <div className='btn black lg'>Demo</div>
                                    <div className='btn orange lg'>Reauest demo</div>
                                </div>
                            </div>
                            <div className='imgContents'>
                                <img src='https://okdevtv.com/target/style/img/product_mask.png' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='info solution'>
                        <div className='align_wrap'>
                            <div className='textContents'>
                                <div className='text'>
                                    <div className='contentTitle'>Solution information</div>
                                    <div className='subTitle'>
                                        <ul>
                                            <li>Faster research</li>
                                            <li>Fashion</li>
                                            <li>Security</li>
                                            <li>Medical</li>
                                        </ul>
                                        <div className='btn orangeOutline sm'>
                                            learn more <span className='ic more'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='imgContents multi'>
                                <img src='https://okdevtv.com/target/style/img/solution_mask_01.png' alt='' />
                                <img src='https://okdevtv.com/target/style/img/solution_mask_02.png' alt='' />
                                <img src='https://okdevtv.com/target/style/img/solution_mask_03.png' alt='' />
                                <img src='https://okdevtv.com/target/style/img/solution_mask_04.png' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='request'>
                        <div className='align_wrap'>
                            <div className='sectionTitle'>Request demo</div>
                            <div className='submitForm'>
                                <div className='form'>
                                    <p>Company/institution email</p>
                                    <div className='inputForm'>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className='form'>
                                    <div className='half'>
                                        <p>Company name</p>
                                        <div className='inputForm'>
                                            <input type='text' />
                                        </div>
                                    </div>
                                    <div className='half'>
                                        <p>Job title/role</p>
                                        <div className='inputForm'>
                                            <input type='text' />
                                        </div>
                                    </div>
                                </div>
                                <div className='form'>
                                    <div className='half'>
                                        <p>First name</p>
                                        <div className='inputForm'>
                                            <input type='text' />
                                        </div>
                                    </div>
                                    <div className='half'>
                                        <p>Last name</p>
                                        <div className='inputForm'>
                                            <input type='text' />
                                        </div>
                                    </div>
                                </div>
                                <div className='form'>
                                    <p>A few words about my use case and needs</p>
                                    <div className='inputForm'>
                                        <textarea></textarea>
                                    </div>
                                </div>
                                <div className='form'>
                                    <p>Select file</p>
                                    <div className='fileForm'>
                                        <label htmlFor='get_file'>Choose files</label>
                                        <input id='get_file' type='file' />
                                    </div>
                                </div>
                            </div>
                            <div className='btn lg black'>Submit</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
