import React from 'react';
import h from './Header.module.css';
import Navigation from "./Navigation/Navigation";

const Header = ()  => {
    return (
        <div  className={h.header}>
        <Navigation/>
        </div>
    );
}

export default Header;
