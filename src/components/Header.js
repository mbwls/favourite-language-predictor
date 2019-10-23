import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div>
            <h1 className='detective-header'>🕵</h1>
            <h1 className='title-header'>LANGUAGE<br/>SLEUTH</h1>
            <h4>Enter a GitHub username below to determine the user's favourite programming&nbsp;language.</h4>
        </div>
    )
}

export default Header
