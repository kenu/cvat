import React from 'react';

interface tabPageProps {
    tab: number;
}

export default function TagPage(props: tabPageProps) {
    return (
        <>
            <div className='tagContain'>
                <div className='tagContents'>
                    <div className='imgCanvas'>
                        <div className='imgArea'>
                            <div className='subBtn'>
                                {props.tab === 0 && <span className='ic tag_01'></span>}
                                {props.tab === 1 && <span className='ic tag_02'></span>}
                                {props.tab === 2 && <span className='ic tag_03'></span>}
                            </div>
                            <div className='pageNav'>1 / 8</div>
                        </div>
                        <div className='tagArea'>
                            <div className='tagWrap'>
                                <div className='baseTags'>
                                    <p className='tagTitle'>Base tag</p>
                                    <div>
                                        <span className='tag'>tag 1</span>
                                        <span className='tag'>tag 1</span>
                                        <span className='tag'>tag 1</span>
                                    </div>
                                </div>
                                <div className='addTags'>
                                    <p className='tagTitle'>Add tag</p>
                                    <div>
                                        <span className='tag red'>tag 1</span>
                                        <span className='tag orange'>tag 1</span>
                                    </div>
                                </div>
                            </div>
                            <div className='btn complete'>Complete</div>
                        </div>
                    </div>
                </div>
                <div className='imgLists'>
                    <ul>
                        <li>
                            <div className='swiperImg'></div>
                        </li>
                        <li>
                            <div className='swiperImg'></div>
                        </li>
                        <li>
                            <div className='swiperImg'></div>
                        </li>
                        <li>
                            <div className='swiperImg'></div>
                        </li>
                        <li>
                            <div className='swiperImg'></div>
                        </li>
                        <li>
                            <div className='swiperImg'></div>
                        </li>
                        <li>
                            <div className='swiperImg'></div>
                        </li>
                        <li>
                            <div className='swiperImg'></div>
                        </li>
                        <li>
                            <div className='swiperImg'></div>
                        </li>
                        <li>
                            <div className='swiperImg'></div>
                        </li>
                        <li>
                            <div className='swiperImg'></div>
                        </li>
                        <li>
                            <div className='swiperImg'></div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
