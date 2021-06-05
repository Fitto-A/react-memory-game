import React from 'react';
import logo from '../images/Logo.png';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} alt="The Simpsons" />
                </div>
                <h1 className='title'>Memory Game</h1>
            </div>
    </header>
    )

}

export default Header