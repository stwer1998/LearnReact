import React from 'react';
import logo from './logo.svg';
import css from './Header.module.css';


let Header = () => {
    return (
        <header className={css.header}>
            <img src={logo} />
        </header>
    );
}

export default Header;