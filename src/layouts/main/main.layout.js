import { Sidebar, Footer, Header } from 'layouts';
import React from 'react';
import Styles from './main.module.css';

export const Main = (props) => {
    return (
        <div>
            <div className={Styles.container}>
                <Sidebar/>
                <div className={Styles.contentMainBox}>
                    <Header/>
                    {props.children}
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
