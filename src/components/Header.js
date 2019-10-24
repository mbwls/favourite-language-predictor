import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div>
            <h1 className='detective-header'>
                <span role='img' aria-label='detective' data-test='detective'>
                🕵
                </span>
            </h1>

            <h1 className='title-header' data-test='title'>
                LANGUAGE<br/>SLEUTH
            </h1>

            <h4 data-test='description'>Enter a GitHub username to determine the user's favourite programming&nbsp;language.</h4>
        </div>
    )
}

export default Header
