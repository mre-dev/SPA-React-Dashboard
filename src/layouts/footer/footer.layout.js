import { Navigation } from 'components';
import React from 'react';
import Styles from './footer.module.css';

export const Footer = (props) => {
    return (
        <footer className={Styles.footer}>
            <h2><Navigation text="Mohammad Reza Ebrahimi" link='https://mre01.ir' external/></h2>
        </footer>
    );
}
