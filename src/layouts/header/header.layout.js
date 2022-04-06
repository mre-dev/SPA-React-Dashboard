import React from 'react';
import Styles from './header.module.css';
import { BiUserCircle } from 'assets/images/icons';

export const Header = (props) => {
    return (
        <header className={Styles.header}>
            <h3>Welcome To Dashboard</h3>
            <BiUserCircle />
        </header>
    );
}
